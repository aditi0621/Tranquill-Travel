import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Live3.css";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa"; // Import icons

const Live3 = () => {
  const [packageDetails, setPackageDetails] = useState([]);
  const [userId, setUserId] = useState(null); // Store user ID
  const [registrationLoading, setRegistrationLoading] = useState(false); // Registration loading state
  const [error, setError] = useState(null); // Store error state for better visibility

  // Fetch userId from localStorage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      console.log("User ID retrieved from localStorage:", storedUserId);
      setUserId(storedUserId);
    } else {
      console.error("No userId found in localStorage");
    }
  }, []);

  // Function to fetch family packages from the server
  const fetchPackages = () => {
    axios
      .get("http://localhost/fetchFamilyPackages.php")
      .then((response) => {
        setPackageDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch family packages.");
      });
  };

  // Function to handle package registration
  const handleRegister = async (tId) => {
    console.log("Register button clicked with tId:", tId); // Debug log
    console.log("Current userId:", userId); // Debug log

    if (!userId || !tId) {
      alert("User ID or Travel ID is missing.");
      console.error("Registration failed: Missing userId or tId", {
        userId,
        tId,
      });
      return;
    }

    try {
      setRegistrationLoading(true);
      console.log("Registering user", { userId, tId });

      const response = await axios.post(
        "http://localhost/registerPackageT1.php",
        { userId, tId }, // Pass as JSON object
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server response:", response.data);

      if (response.data.message) {
        alert(response.data.message);
      } else if (response.data.error) {
        alert("Error: " + response.data.error);
      } else {
        alert("An unknown error occurred.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    } finally {
      setRegistrationLoading(false);
    }
  };

  return (
    <div className="live2-container">
      <div className="service">
        <h2>Packages for Family</h2>
        <p>
          Are you looking for a perfect vacation with your loved ones? Our
          family packages offer a memorable experience with activities for all
          ages. Enjoy quality time together while exploring new destinations.
        </p>
        <button className="package-button" onClick={fetchPackages}>
          View Family Packages
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Show error message */}
      {packageDetails.length > 0 && (
        <div className="package-details">
          <h2>Package Details</h2>
          <div className="package-grid">
            {packageDetails.map((pkg, index) => (
              <div key={index} className="package-item">
                <img
                  src={pkg.img}
                  alt={pkg.destination}
                  className="package-img"
                />
                <h3>{pkg.destination}</h3>
                <p>
                  <FaMapMarkerAlt /> {pkg.destination}
                </p>
                <p>
                  <FaClock /> Days: {pkg.days}
                </p>
                <p>
                  <FaCalendarAlt /> Date: {pkg.date} {/* Display the date */}
                </p>
                <p>Price: ₹{pkg.price}</p>
                <button
                  className="register-button"
                  onClick={() => handleRegister(pkg.tId)}
                >
                  {registrationLoading ? "Registering..." : "Register Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Live3;
