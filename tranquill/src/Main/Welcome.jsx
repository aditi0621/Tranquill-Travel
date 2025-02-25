// HeroSection.jsx
import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Explore the Serenity of Nature</h2>
        <p>
          Embark on a journey to find peace and tranquility. Discover beautiful
          places that will soothe your mind and soul.
        </p>
        <a href="/explore" className="explore-button">
          Explore Now
        </a>
      </div>
    </section>
  );
};

export default Welcome;
