import React from "react";
import "./Hero.css";
import heroImage from "../assets/truck-hero.jpg"; // Import your image

const Hero = () => {
  return (
    <section className="hero">
      {/* Left Side */}
      <div className="hero-text fade-in-left">
        <h2>Welcome to the Admin Dasboard Portal</h2>
        {/* <p>
          Login details are provided to you by the school only if you are an admin or staff. If you are a student, please contact the school administration for access.
        </p> */}
        <button className="cta-btn bounce">Enrol Now</button>
      </div>
        
      {/* Right Side */}
      <div className="hero-image fade-in-right">
        <img src={heroImage} alt="Truck driving training" />
      </div>
    </section>
  );
};

export default Hero;