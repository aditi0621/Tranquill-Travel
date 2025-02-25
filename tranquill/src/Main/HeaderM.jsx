import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderM.css";

const HeaderM = () => {
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    // Clear user session (for example, remove token or clear localStorage)
    localStorage.removeItem("userId"); // Assuming you're storing userId in localStorage
    localStorage.removeItem("token"); // If you have a token, remove it as well

    // Navigate the user back to the login page
    navigate("/login");
  };

  return (
    <header className="main-header">
      <div className="brand">
        <Link to="/main-page">
          <h1>Tranquill Travel</h1>
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/meditation">Meditation</Link>
          </li>
          <li>
            <Link to="/yoga-camp">Yoga</Link>
          </li>
          <li>
            <Link to="/live-in-nature">Live in Nature</Link>
          </li>
          <li>
            <Link to="/myPackage">My Package</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* Replace Link with button for logout */}
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderM;
