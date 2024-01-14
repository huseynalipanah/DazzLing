import React from "react";
import "./FooterLeft.scss";
import { NavLink } from "react-router-dom";
const FooterLeft = () => {
  return (
    <div className="footer-left">
      <h3>Other Pages</h3>
      <div className="footer-top-left">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Languages</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLeft;
