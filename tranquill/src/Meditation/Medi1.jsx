import React from "react";
import "./Medi1.css";

const Medi1 = () => {
  return (
    <div
      className="medi1-container"
      style={{ backgroundImage: `url("/img/medi.jpg")` }} // Absolute path from the public folder
    >
      <div className="medi1-content">
        <h2>Meditation</h2>
        <p>Meditation is that which gives you deep rest</p>
      </div>
    </div>
  );
};

export default Medi1;
