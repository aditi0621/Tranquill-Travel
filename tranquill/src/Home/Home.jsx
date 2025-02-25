import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleJoinUsClick = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to Tranquill Travel</h1>
      <p className="intro-text">
        Discover the peace and tranquility you deserve. Whether you're looking
        for a serene yoga camp, a calming meditation session, or a peaceful
        retreat in nature, we offer the perfect escape.
      </p>

      <div className="feature-section">
        <div className="feature-item">
          <h2>Meditation Classes</h2>
          <p>
            Join our expert-guided online and offline meditation classes to find
            inner peace and balance in life.
          </p>
        </div>
        <div className="feature-item">
          <h2>Yoga Retreats</h2>
          <p>
            Experience the harmony of mind, body, and spirit with our yoga
            retreats designed for all skill levels.
          </p>
        </div>
        <div className="feature-item">
          <h2>Nature Escapes</h2>
          <p>
            Reconnect with nature in peaceful locations where you can relax and
            rejuvenate away from the busy world.
          </p>
        </div>
      </div>

      {/* Join Us Button */}
      <div className="join-section">
        <button className="join-button" onClick={handleJoinUsClick}>
          Join Us Today
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonial">
          <p>
            "Tranquill Travel helped me reconnect with myself. The yoga retreat
            was an unforgettable experience!"
          </p>
          <span>- Sarah B.</span>
        </div>
        <div className="testimonial">
          <p>
            "I felt at peace during the meditation classes. Highly recommend to
            anyone looking for a break from the fast-paced life."
          </p>
          <span>- John D.</span>
        </div>
        <div className="testimonial">
          <p>
            "The nature escape was truly serene. I left feeling rejuvenated and
            in touch with nature."
          </p>
          <span>- Emily R.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
