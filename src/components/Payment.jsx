import React, { useState } from 'react';
import './payment.css'
function Payment() {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="modal">
      <form className="form" onSubmit={handleSubmit}>
        <div className="payment--options">
          <button name="paypal" type="button">
            {/* PayPal SVG code */}
          </button>
          <button name="apple-pay" type="button">
            {/* Apple Pay SVG code */}
          </button>
          <button name="google-pay" type="button">
            {/* Google Pay SVG code */}
          </button>
        </div>
        <div className="payment-details">
          <label>
            Cardholder Name
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              required
            />
          </label>
          <label>
            Card Number
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Expiry Date
            <input
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </label>
          <label>
            CVV
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}

export default Payment;
