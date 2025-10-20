import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/solvioG.svg`}
          alt="Solviotech Logo"
          className="logo-img"
        />
        <span className="logo-text">
          <span className="logo-solvio">Solvio</span>
          <span className="logo-tech">Tech</span>
        </span>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <button className="contact-btn">Get In Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
