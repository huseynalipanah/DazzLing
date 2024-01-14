import React from "react";
import "./FooterBottom.scss";
import { NavLink } from "react-router-dom";
const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-left">
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
      <div className="footer-bottom-right">
        <p>
          <span>Dazzling Demo </span>
          All rights reserved. Theme by <span>Colorlib</span> Powered by
          <span>WordPress</span>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
