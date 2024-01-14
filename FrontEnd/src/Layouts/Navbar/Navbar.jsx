import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
  <div className="navbar">
    <div className="nav-logo">
        <span><NavLink to="/">Dazzling Demo</NavLink></span>
    </div>
    <div className="nav-menu">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/add">Add</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/languages">Languages</NavLink></li>
        </ul>
    </div>
  </div>);
};

export default Navbar;
