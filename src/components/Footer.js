import "./FooterStyles.css";
import CV from "../assets/resume.png"; // Make sure the path and file name are correct

import React from "react";
import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "fff", marginRight: "1rem" }} />
            <div>
              <h4>Kathmandu, Nepal</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "fff", marginRight: "1rem" }}
              />
              9746493683
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "fff", marginRight: "1rem" }}
              />
              nanakshrestha777@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <a href={CV} download className="download-button">
            Download CV
          </a>
          <div className="social">
            <a href="https://github.com/nanakshrestha777" target="_blank" rel="noopener noreferrer">
              <FaGithub
                size={35}
                style={{ color: "#24292e", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter
                size={35}
                style={{ color: "#1DA1F2", marginRight: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/nanak-shrestha-6aa2b6258/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={35}
                style={{ color: "#0A66C2", marginRight: "2rem" }}
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
