import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(true); // Toggle between login and signup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle signup functionality
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/auth/signup`, {
        name,
        email,
        password,
      });
      toast.success('User signed up successfully!');
      console.log('Signup Response:', response);
      setLogin(true); // Switch to login view after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error(error.response?.data?.message || 'Error during form submission');
    }
  };

  // Handle login functionality
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}api/auth/login`, {
        email,
        password,
      });
      toast.success('User logged in successfully!');
      console.log('Login Response:', response);
      navigate('/address-payment'); // Redirect to AddressPaymentPage after login
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error.response?.data?.message || 'Error during form submission');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 login">
      <div className="form-container bg-white p-4 rounded shadow">
        <div className="form-toggle d-flex justify-content-between mb-4">
          {/* Login and Signup toggle buttons */}
          <button
            className={`btn ${isLogin ? 'btn-success' : 'btn-light'} me-2`}
            onClick={() => setLogin(true)}
          >
            <div className="arrow-wrapper">
              Login
              <div className="ms-1 arrow"></div>
            </div>
          </button>
          <button
            className={`btn ${!isLogin ? 'btn-success' : 'btn-light'}`}
            onClick={() => setLogin(false)}
          >
            <div className="arrow-wrapper">
              Signup
              <div className="ms-1 arrow"></div>
            </div>
          </button>
        </div>

        {isLogin ? (
          <div className="form">
            <h2 className="logs">Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="button">
                <svg
                  className="svgIcon"
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="form">
            <h2 className="logs">Signup</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="button">
                <svg
                  className="svgIcon"
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
                Signup
              </button>
            </form>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
