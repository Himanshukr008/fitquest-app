import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import './diet'
import './challenges'
import './motivation'
import './bmi'

const Navbar = ({ username, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Fit<span className="navbar-highlight">Quest</span>
      </div>
      <div class="navigate">
        <a href="#Motivation">Motivation</a>
        <a href="#BMI">BMI Calculator</a>
        <a href="#Diet">Diet Chart</a>
        <a href="#Challenges">Challenges</a>
      </div>
      <div className="navbar-user">
        <span>Welcome, {username}</span>
        <button onClick={onLogout} className="logout-button">
          <FaSignOutAlt />
          <span className="logout-text">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;