import "./HeroimgStyle.css";

import React from "react";
import IntroImg from "../assets/intro-bg-img.jpg";
import { Link } from "react-router-dom";
const heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1>Hello, I'm Nanak Shrestha. </h1>
        <p>Pursuing Data Science Education</p>
        <div>
          <button className="rounded-xl border-2 border-blue-500 px-5 py-3 text-base font-medium text-blue-500 transition duration-200 hover:bg-blue-600/5 active:bg-blue-700/5 dark:border-blue-400 dark:bg-blue-400/10 dark:text-white dark:hover:bg-blue-300/10 dark:active:bg-blue-200/10"><Link to="/project" className="btn btn-light">
            Projects
          </Link></button>
          <button className="rounded-xl border-2 border-blue-500 px-5 py-3 text-base font-medium text-blue-500 transition duration-200 hover:bg-blue-600/5 active:bg-blue-700/5 dark:border-blue-400 dark:bg-blue-400/10 dark:text-white dark:hover:bg-blue-300/10 dark:active:bg-blue-200/10"> <Link to="/contact" className="btn btn-dark">
            Contact
          </Link></button>

          
          
        </div>
      </div>
    </div>
  );
};

export default heroimg;
