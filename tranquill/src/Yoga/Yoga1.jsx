import React from "react";
import "./Yoga1.css";

const Yoga1 = () => {
  return (
    <div
      className="medi1-container"
      style={{ backgroundImage: `url("/img/yoga.jpeg")` }} // Absolute path from the public folder
    >
      <div className="medi1-content">
        <h2>Yoga</h2>
        <p>
          Yoga poses are great to strengthen and relax the body, but there's a
          lot more to Yoga than that.
        </p>
      </div>
    </div>
  );
};

export default Yoga1;
