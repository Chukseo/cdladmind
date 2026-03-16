import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>CDI Truck</h2>
          <p>We provide top-quality truck driving training for aspiring drivers.</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Contact Us</h3>
          <p>Email: info@cditruck.com</p>
          <p>Phone: +234 800 123 4567</p>
          <p>Address: 123 Truck Street, Michigan</p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CDI Truck. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;