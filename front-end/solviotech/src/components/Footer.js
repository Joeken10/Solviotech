import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-brand">
          <h2>Solviotech</h2>
          <p>
            Engineering tomorrow’s digital solutions — bridging creativity and
            technology for a smarter future.
          </p>
        </div>

       
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:info@solviotech.com">info@solviotech.com</a></p>
          <p>Phone: +254 700 123 456</p>
          <div className="social-icons">
            <a href="fb"><i className="fab fa-facebook-f"></i></a>
            <a href="x"><i className="fab fa-twitter"></i></a>
            <a href="ln"><i className="fab fa-linkedin-in"></i></a>
            <a href="gh"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Solviotech. All rights reserved.</p>
        <p className="credit">
          Built with ❤️ by <span>Joseph Kennedy Elias (JK)</span> & <span>Philip Osir</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
