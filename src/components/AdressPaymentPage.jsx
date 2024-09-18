import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios
import 'bootstrap/dist/css/bootstrap.min.css';

const AdresPaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '', // Updated to match backend schema
    country: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Correct backend URL
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/shipping`, formData);
      console.log(response.data); // Log response for debugging

      // Redirect to payment form
      navigate('/paymentform');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='borderR py-5 d-flex justify-content-center'>
      <div className="bg-primary text-white rounded-lg p-4 shadow-sm" style={{ borderRadius: '10px' }}>
        <h2 className="font-weight-bold">Shipping Label Address Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group mt-4">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Your name"
              className="form-control"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="address">Address</label>
            <textarea
              placeholder="Your address"
              className="form-control"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-row mt-4">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                placeholder="Your city"
                className="form-control"
                id="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="state">State</label>
              <select
                className="form-control"
                id="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select a state</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CT">Chhattisgarh</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OD">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TS">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UK">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select>
            </div>
          </div>

          <div className="form-row mt-4">
            <div className="form-group col-md-6">
              <label htmlFor="zipCode">ZIP Code</label>
              <input
                placeholder="Your ZIP code"
                className="form-control"
                id="zipCode" // Updated to match backend schema
                type="text"
                value={formData.zipCode} // Updated to match backend schema
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="country">Country</label>
              <select
                className="form-control"
                id="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select a country</option>
                <option value="IN">India</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-right">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdresPaymentPage;
