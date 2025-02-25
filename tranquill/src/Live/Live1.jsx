import React, { useState } from "react";
import "./Live1.css"; // Import the CSS file

const Live1 = () => {
  const slides = [
    { image: "/img/Live1.jpeg", text: "Experience the tranquility of nature" },
    { image: "/img/Live2.jpeg", text: "Reconnect with your inner peace" },
    { image: "/img/Live3.jpg", text: "Embrace the beauty around you" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="live1-container">
      <div
        className="live1-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="live1-text">{slides[currentSlide].text}</div>
      </div>
      <button className="live1-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="live1-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Live1;
