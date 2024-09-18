import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import braintree from 'braintree-web-drop-in';

const PaymentForm = () => {
  const [token, setToken] = useState(''); // Store the Braintree client token
  const [instance, setInstance] = useState(null); // Store the Braintree Drop-in instance
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the client token from the server
    axios.get('/api/payment/token')
      .then(response => {
        setToken(response.data); // Set the token
        // Initialize Braintree Drop-in UI
        braintree.create({
          authorization: response.data,
          container: '#dropin-container' // Container where Drop-in UI will be rendered
        }, (err, dropinInstance) => {
          if (err) {
            console.error('Error creating Braintree Drop-in:', err);
            return;
          }
          setInstance(dropinInstance); // Store the instance
        });
      })
      .catch(error => console.error('Client token fetch error:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Request payment method from the Braintree Drop-in instance
    instance.requestPaymentMethod((err, payload) => {
      if (err) {
        console.error('Error requesting payment method:', err);
        return;
      }

      // Send the payment nonce to the backend
      axios.post('/api/payment/checkout', {
        paymentMethodNonce: payload.nonce, // The payment method nonce
        amount: '10.00' // Hardcoded payment amount
      })
      .then(response => {
        console.log('Payment success:', response.data);
        navigate('/success'); // Redirect to success page upon successful payment
      })
      .catch(error => console.error('Payment error:', error));
    });
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div id="dropin-container"></div> {/* Drop-in UI will be rendered here */}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
