import React, { useState } from "react";
import axios from "axios";
import "./M1.css";

const M1 = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch program data from the server
  const fetchPrograms = () => {
    setLoading(true);
    setError(null);

    axios
      .get("http://localhost/myPackage1.php") // Adjust URL if necessary
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
        Click the button below to view your yoga and meditation package details
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
                src={program.imgUrl || "path_to_fallback_image.jpg"}
                alt={program.programName}
                className="program-img"
              />

              <h3 className="program-title">{program.programName}</h3>
              <p className="program-location">
                <i className="fas fa-map-marker-alt"></i> {program.location}
              </p>
              <p>{program.language}</p>
              <p className="program-dates">
                <i className="fas fa-calendar-alt"></i> {program.startDate} -{" "}
                {program.endDate}
              </p>
              <p className="program-time">
                <i className="fas fa-clock"></i> {program.startTime} -{" "}
                {program.endTime}
              </p>
              <p className="program-fee">₹{program.fee}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default M1;
