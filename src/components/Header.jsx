import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Images } from './../image/index';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar d-flex justify-content-between">
      <div className="navbar-container">
        <img src={Images.Image1} alt="Centered Image" className="center-image" />
        <div className="brand px-4">
          <Link to="/" className="brand-text">
            PARAMHANS SWAMI AAGMANAND JI MAHARAJ
          </Link>
        </div>
        {/* Hamburger Icon for mobile screens */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>
        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/work">Book</Link>
          <Link className="nav-link" to="/wisdom">Wisdom</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
