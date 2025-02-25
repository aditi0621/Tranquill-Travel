import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list navbar-left">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul className="navbar-list navbar-right">
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
