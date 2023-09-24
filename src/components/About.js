import React from 'react';
import HTML from "../assets/icon_html.png";
import CSS from "../assets/css-3.png";
import GITHUB from "../assets/github.png";
import PYTHON from "../assets/python-logo.png";
import FIGMA from "../assets/figma-logo.png";
import REACT from "../assets/react.png";
import "./AboutStyles.css";

const About = () => {
  return (
    <div className="About">
      <div className="About-container text-2xl text-center py-8">
        <h1>Who am I?</h1>
        <p>
          I'm a data science student based at Birmingham City University, passionate about leveraging the power of data and technology to solve real-world problems. I have a strong enthusiasm for learning and continuously exploring new technologies in the ever-evolving field of data science.
        </p>
      </div>
      <div className="grid-container">
        <div className="left-box">
          <h1><span>Experience</span></h1>
          <div className="white-box-left">
            I have actively sought opportunities to apply my skills in real-world settings. I have collaborated with industry professionals on data science projects, participated in hackathons, and engaged in online communities to stay updated with the latest trends and advancements in the field.
          </div>
        </div>
        <div className="right-box ">
          <h1><span>Skills</span></h1>
          <div className="white-box-right  ms-center">
            <div className="hover:scale-110 duration-500 my-5">
              <img className="w-12" src={HTML} alt="HTML icon" />
              <p className="text">HTML</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <img className="w-10" src={CSS} alt="CSS icon" />
              <p className="text">CSS</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <img className="w-10" src={GITHUB} alt="GitHub icon" />
              <p className="text">GitHub</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <img className="w-10" src={PYTHON} alt="Python icon" />
              <p className="text">Python</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <img className="w-10" src={FIGMA} alt="Figma icon" />
              <p className="text">Figma</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <img className="w-10" src={REACT} alt="React icon" />
              <p className="text">React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;