import React, { useState, useEffect } from "react";
import "./Medi3.css";
import axios from "axios";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

const Medi3 = () => {
  const [programs, setPrograms] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      console.log("User ID retrieved from localStorage:", storedUserId); // Debugging log
      setUserId(storedUserId);
    } else {
      console.error("No userId found in localStorage");
    }
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get("http://localhost/fetchMediProgram.php");
      setPrograms(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
      setPrograms([]);
    }
  };

  const handleRegister = async (programId) => {
    console.log(`Register button clicked for program ID: ${programId}`);
    console.log(`Attempting to register with userId: ${userId}`); // Debugging log

    try {
      if (!userId) {
        alert("User ID not found. Please log in again.");
        return;
      }

      // Send the registration request to the backend
      const response = await axios.post(
        "http://localhost/registerProgram.php",
        new URLSearchParams({
          userId: userId,
          programId: programId,
        })
      );

      console.log("Registration response:", response.data); // Debugging log

      if (response.data.message) {
        alert(response.data.message);
      } else if (response.data.error) {
        alert("Error: " + response.data.error);
      } else {
        alert("An unknown error occurred.");
      }
    } catch (error) {
      console.error("Error registering for the program:", error);

      // Display a more detailed error message
      if (error.response && error.response.data) {
        alert(
          "Error: " +
            (error.response.data.error || JSON.stringify(error.response.data))
        );
      } else {
        alert("An error occurred during registration. Please try again.");
      }
    }
  };

  return (
    <div className="medi3-container">
      <h2>Program Conducted by Us</h2>
      <button onClick={fetchPrograms}>Click here!!</button>
      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.programId} className="program-card">
            <img
              src={program.imgUrl}
              alt={program.programName}
              className="program-image"
            />
            <div className="program-details">
              <h3>{program.programName}</h3>
              <p className="program-location">
                <FaMapMarkerAlt className="icon" /> {program.location}
              </p>
              <p className="program-language">{program.language}</p>
              <p className="program-dates">
                <FaCalendarAlt className="icon" />{" "}
                {new Date(program.startDate).toLocaleDateString()} -{" "}
                {new Date(program.endDate).toLocaleDateString()}
              </p>
              <p className="program-time">
                <FaClock className="icon" /> {program.startTime.slice(0, 5)} -{" "}
                {program.endTime.slice(0, 5)}
              </p>
              <p className="program-fee">₹{program.fee}</p>
              <button
                className="register-button"
                onClick={() => handleRegister(program.programId)}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medi3;
