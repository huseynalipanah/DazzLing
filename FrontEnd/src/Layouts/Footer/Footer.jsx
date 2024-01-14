import React from "react";
import FooterTop from "../../Components/FooterTop/FooterTop";
import FooterBottom from './../../Components/FooterBottom/FooterBottom';
import "./Footer.scss";
const Footer = () => {
  return (
  <div className="footer">
    <FooterTop/>
    <div className="footer-menu">
       <FooterBottom />
    </div>
    </div>);
};

export default Footer;
