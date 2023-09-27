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
        <p className='ms-5'>
          I'm a data science student based at Birmingham City University, passionate about leveraging the power of data and technology to solve real-world problems. I have a strong enthusiasm for learning and continuously exploring new technologies in the ever-evolving field of data science.
        </p>
      </div>
      <div className="grid-container">
        <div className="left-box">
          <h1><span>Experience</span></h1>
          <div className="white-box-left">
          "As a dedicated data science student, I am committed to harnessing the power of data and technology to address real-world challenges. I actively engage in research, continuously expand my skill set, and thrive in collaborative team environments to drive innovative solutions in the dynamic field of data science."
          </div>
        </div>
        <div className="right-box">
          <h1><span>Skills</span></h1>
          <div className="white-box-right">
            <div className="skill">
              <img className="skill-icon" src={HTML} alt="HTML icon" />
              <p className="skill-name">HTML</p>
            </div>
            <div className="skill">
              <img className="skill-icon" src={CSS} alt="CSS icon" />
              <p className="skill-name">CSS</p>
            </div>
            <div className="skill">
              <img className="skill-icon" src={GITHUB} alt="GitHub icon" />
              <p className="skill-name">GitHub</p>
            </div>
            <div className="skill">
              <img className="skill-icon" src={PYTHON} alt="Python icon" />
              <p className="skill-name">Python</p>
            </div>
            <div className="skill">
              <img className="skill-icon" src={FIGMA} alt="Figma icon" />
              <p className="skill-name">Figma</p>
            </div>
            <div className="skill">
              <img className="skill-icon" src={REACT} alt="React icon" />
              <p className="skill-name">React</p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
