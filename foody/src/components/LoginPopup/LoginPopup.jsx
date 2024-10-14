import React from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <img src={assets.logo} alt="Logo" className="login-popup-logo" />
        <button className="close-btn" onClick={() => setShowLogin(false)}>
          ×
        </button>
        <h2>Sign in</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">
            Sign in
          </button>
        </form>
        <div className="login-popup-footer">
          <a href="/forgot-password">Forgot your password?</a>
          <p>
            New to AliExpress? <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
