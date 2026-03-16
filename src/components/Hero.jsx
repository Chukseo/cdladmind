import React from "react";
import "./Hero.css";
import heroImage from "../assets/truck-hero.jpg"; // Import your image

const Hero = () => {
  return (
    <section className="hero">
      {/* Left Side */}
      <div className="hero-text fade-in-left">
        <h2>Advanced Truck Driving School you can Trust.</h2>
        <p>
          We are dedicated to providing top-quality truck driving training for aspiring drivers. Our comprehensive programs combine hands-on experience, industry-recognized certification, and access to job opportunities to help you succeed in your trucking career.
        </p>
        <button className="cta-btn bounce">Enrol Now</button>

        {/* Partner Logos */}
        <div className="partners">
          <span>Slack</span>
          <span>Magnolia</span>
          <span>Powerups</span>
          <span>Wrappsed</span>
          <span>Keepme</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="hero-image fade-in-right">
        <img src={heroImage} alt="Truck driving training" />
      </div>
    </section>
  );
};

export default Hero;