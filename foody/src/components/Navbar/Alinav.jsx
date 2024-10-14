import React from "react";
import "./Alinav.css";
import { Link } from "react-router-dom"; // Make sure to have react-router-dom installed
import { assets } from "../../assets/assets"; // Adjust the path to your assets

const Alinav = () => {
  return (
    <div className="alinav">
      <Link to="/" className="alinav-logo">
        <img src={assets.logo} alt="Logo" />
      </Link>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="chercher votre hanout"
        />
        <i className="fa fa-search search-icon"></i>
      </div>
      <div className="alinav-buttons">
        <button className="alinav-button">Sign Up</button>
        <button className="alinav-button">Login</button>
      </div>
    </div>
  );
};

export default Alinav;
