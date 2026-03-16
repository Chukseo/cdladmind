import React from "react";
import { motion } from "framer-motion";
import "./Promo.css";

// Import your background image
import promoBg from "../assets/promo-bg.png"; // replace with your actual image

const Promo = () => {
  return (
    <div
      className="promo-container"
      style={{ backgroundImage: `url(${promoBg})` }}
    >
      <motion.div
        className="promo-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Truck Driving Training</h1>
        <p>Experience modern, comfortable, and professional truck driving instruction.</p>
        <motion.button
          className="promo-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enrol Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Promo;