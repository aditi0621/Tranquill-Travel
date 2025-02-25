import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Live2.css";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";

const Live2 = () => {
  const [packageDetails, setPackageDetails] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registrationLoading, setRegistrationLoading] = useState(false);

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

  // Function to fetch individual packages from the backend
  const fetchPackages = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "http://localhost/fetchIndividualPackages.php"
      );
      console.log("Fetched packages:", response.data);
      setPackageDetails(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
      setError("Failed to fetch packages.");
    } finally {
      setLoading(false);
    }
  };

  // Updated function to handle package registration
  const handleRegister = async (tId) => {
    if (!userId || !tId) {
      alert("User ID or Travel ID is missing.");
      return;
    }

    try {
      setRegistrationLoading(true);

      const response = await axios.post(
        "http://localhost/registerPackageT1.php",
        { userId, tId }, // Pass as JSON object
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
      <h1>We Provide Two Types of Services for People</h1>

      {/* Section for individual packages */}
      <div className="service">
        <h2>Packages for Individuals</h2>
        <p>
          Are you someone who enjoys traveling but feels alone? We have the
          perfect solution for you. Join our group tours where you can travel
          with like-minded individuals and make new friends along the way.
        </p>

        {/* Button to fetch packages */}
        <button
          className="package-button"
          onClick={fetchPackages}
          disabled={loading}
        >
          {loading ? "Loading..." : "View Individual Packages"}
        </button>

        {/* Display error messages if any */}
        {error && <p className="error-message">{error}</p>}
      </div>

      {/* Conditionally render package details if packages exist */}
      {packageDetails.length > 0 && (
        <div className="package-details">
          <h2>Package Details</h2>

          <div className="package-grid">
            {packageDetails.map((pkg, index) => (
              <div key={index} className="package-item">
                {/* Image for package */}
                <img
                  src={pkg.img || "/default-image.jpg"} // Fallback image if none is available
                  alt={pkg.destination || "Unknown Destination"}
                  className="package-img"
                />
                {/* Package Details */}
                <h3>{pkg.destination || "Unknown Destination"}</h3>
                <p>
                  <FaMapMarkerAlt />{" "}
                  {pkg.destination || "Location not available"}
                </p>
                <p>
                  <FaClock /> Days: {pkg.days || "N/A"}
                </p>
                <p>
                  <FaCalendarAlt /> Date: {pkg.date || "Date not available"}
                </p>
                <p>Price: ₹{pkg.price || "Price not available"}</p>
                {/* Register Button */}
                <button
                  className="register-button"
                  onClick={() => handleRegister(pkg.tId)}
                  disabled={registrationLoading || !pkg.tId}
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

export default Live2;
