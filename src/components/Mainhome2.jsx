import React from "react";
import { motion } from "framer-motion";
import "./Mainhome2.css";

// Import images
import toolsImg from "../assets/erv1.jpg";
import whiteningImg from "../assets/erv2.jpg";
import bracesImg from "../assets/erv3.jpg";

const services = [
  {
    title: "Training",
    description: "Comprehensive training for aspiring truck drivers.",
    image: toolsImg,
  },
  {
    title: "Certification",
    description: "Get certified with our industry-recognized programs.",
    image: whiteningImg,
  },
  {
    title: "Experienced Tutors",
    description: "Expert instruction from seasoned professionals.",
    image: bracesImg,
  },
  {
    title: "Oppotunities",
    description: "Access to job placement and career advancement opportunities.",
    image: null, // highlighted section without image
    highlight: true,
  },
];

const Mainhome2 = () => {
  return (
    <div className="services-container">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Services</h2>
        <p>
            We offer a range of services to help you become a skilled and confident truck driver, including comprehensive training, certification programs, and access to experienced tutors and job opportunities.
        </p>
        <button className="learn-more">Learn More</button>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`service-card ${service.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {service.image && (
              <img src={service.image} alt={service.title} className="service-icon" />
            )}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mainhome2;