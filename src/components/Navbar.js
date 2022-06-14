import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const planet = require('../images/planet.png');

const Navbar = () => {
  const activeLink = (isActive) => (isActive ? { textDecoration: 'underline' } : undefined);

  return (
    <div className="navbar">
      <div className="logo-section">
        <img className="logo" src={planet} alt="space travelers" />
      </div>
      <div className="flex">
        <NavLink to="/" style={({ isActive }) => activeLink(isActive)}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => activeLink(isActive)}>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
