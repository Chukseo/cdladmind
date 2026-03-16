import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg"; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="CDI Truck Logo" className="logo-img" />
        <h1>Great Lake CDL</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/Contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
      </ul>

      {/* Contact Button */}
      <button className="contact-btn">Apply Now</button>
    </nav>
  );
};

export default Navbar;