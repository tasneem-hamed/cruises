import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <div>©2025 CruiseBooking. All Rights Reserved.</div>
          <div>Set sail with comfort & adventure 🌊🚢</div>
        </div>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:contact@cruisebooking.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+1234567890">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

