import React from "react";
import "./MainHome1.css";
import teamImage from "../assets/team.jpg";       // replace with your actual image
import equipmentImage from "../assets/equipment.jpg"; // replace with your actual image

const MainHome1 = () => {
  return (
    <section className="showcase">
      {/* Stylish Divider + Heading */}
      <div className="showcase-heading fade-in-down">
        <div className="divider"></div>
        <h1>About Us</h1>
        <p>Professional service, modern approach, and a team you can trust.</p>
      </div>

      {/* Left Section */}
      <div className="showcase-text fade-in-up">
        <h2>Training and Certification and Job Opportunities for Truck Drivers</h2>
        <p>
            At CDI Truck, we are dedicated to providing top-quality truck driving training for aspiring drivers. Our comprehensive programs combine hands-on experience, industry-recognized certification, and access to job opportunities.
        </p>
      </div>

      {/* Middle Section */}
      <div className="showcase-card fade-in-up">
        <img src={teamImage} alt="Experienced dental team" />
        <div className="caption">
          <h3>Professional Customer Care Service</h3>
          <p>Specialists across all key areas of the industry</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="showcase-card fade-in-up">
        <img src={equipmentImage} alt="Modern dental equipment" />
        <div className="caption">
          <h3>Professional Team</h3>
          <p>Experienced professionals dedicated to your needs.</p>
        </div>
      </div>
    </section>
  );
};

export default MainHome1;