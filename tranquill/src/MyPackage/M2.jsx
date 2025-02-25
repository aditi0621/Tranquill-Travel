import React, { useState } from "react";
import axios from "axios";
import "./M2.css";

const M2 = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch program data from the server
  const fetchPrograms = () => {
    setLoading(true);
    setError(null);

    axios
      .get("http://localhost/myPackage2.php") // Adjust URL if necessary
      .then((response) => {
        console.log("Fetched programs:", response.data);
        setPrograms(response.data); // Assuming response.data is an array of programs
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch programs.");
        setLoading(false);
      });
  };

  return (
    <div className="about-container">
      <h1 className="header-text">
        Click the button below to view your travel package details
      </h1>
      <button className="fetch-button" onClick={fetchPrograms}>
        View Packages
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {programs.length > 0 && (
        <div className="program-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <img
                src={program.img} // Assuming the 'img' field contains the image URL
                alt={program.destination}
                className="program-img"
              />
              <h3 className="program-title">{program.destination}</h3>
              <p className="program-days">{program.days}</p>
              <p className="program-price">Price: ₹{program.price}</p>
              <p className="program-date">Date: {program.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default M2;
