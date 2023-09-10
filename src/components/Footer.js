import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "000", marginRight: "2rem" }} />
            <div>
              <p>Kathmandu</p>
              <p>Nepal</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "000", marginRight: "2rem" }}
              />
              9746493683
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "000", marginRight: "2rem" }}
              />
              nanakshrestha777@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>This is me -UnderConstruction</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "1877F2", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "1DA1F2", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "0A66C2", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
