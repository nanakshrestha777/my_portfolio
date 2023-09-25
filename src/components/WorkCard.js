import "./WorkCardStyles.css";
import img1 from "../assets/nguess.jpg";
import img2 from "../assets/hm.jpg";
import img3 from "../assets/html_css.jpg";

import React from "react";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="Project-heading text-2xl font-bold text-center mb-12 glow-effect">
        Projects
      </h1>
     
      <div className="Project-card1">
        <div className="image-container">
          <img src={img1} alt="img" />
        </div>
        <div className="content-container">
          <h2 className="text-2xl text-center ">
            <span className="flex mx-6 my-3 animate-pulse text-white">
              Guess The Number
            </span>
          </h2>
          <div className="Pro-details">
            <p className="text-block ">
              "Guess the Number - game using Python. Players have to guess a
              randomly generated number between 1 and 100. The game provides
              feedback on each guess, and players aim to guess the number
              correctly in the fewest attempts possible. It's a fun and
              interactive project that showcases basic programming concepts and
              user input handling."
            </p>
            <hr className="flex-grow border-t- border-blue-800 py-1 my-4" />
            <div className="Pro-btns ">
              <a
                href="https://github.com/nanakshrestha777/Myrepo"
                className="ntm inline-block bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 text-xl text-center transition duration-600 rounded-lg hover:from-purple-600 hover:to-pink-900 ease bg-gradient-to-br from-purple-500 to-blue-700 md:w-auto"
                style={{
                  border: "2px solid white",
                  fontFamily: "YourCustomFont",
                  borderRadius: "20px 20px 20px 20px",
                }}
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-card2">
        <div className="image-container">
          <img  src={img2} alt="img" />
        </div>
        <div className="content-container">
          <h2 className="text-2xl text-center ">
            <span className="flex mx-6 my-3  animate-pulse text-white">
              Hospital Management System
            </span>
          </h2>
          <div className="Pro-details">
            <p className="text-block">
              "A hospital Management system created administrators to register
              patients, assign doctors, and discharge patients. Additionally, it
              enables the addition of new doctors to the system. Python
              programming is used to develop this system, providing a flexible
              and efficient platform for healthcare management."
            </p>
            <hr className="flex-grow border-t- border-blue-800 py-1 my-4" />
            <div className="Pro-btns">
              <a
                href="https://github.com/nanakshrestha777/Myrepo"
                className="ntm inline-block bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 text-xl text-center transition duration-600 rounded-lg hover:from-purple-600 hover:to-pink-900 ease bg-gradient-to-br from-purple-500 to-blue-700 md:w-auto"
                style={{
                  border: "2px solid white",
                  fontFamily: "YourCustomFont",
                  borderRadius: "20px 20px 20px 20px",
                }}
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Project-card3">
        <div className="image-container">
          <img src={img3} alt="img" />
        </div>
        <div className="content-container">
          <h2 className="text-2xl text-center py-2">
            <span className="flex mx-6 my-3 animate-pulse text-white">
              Web Development
            </span>
          </h2>
          <div className="Pro-details ">
            <p className="text-block">
              "The web development project created using HTML and CSS is a simple and visually appealing website. It utilizes HTML for structuring the content and CSS for styling and layout. The project demonstrates the fundamental concepts of front-end web development, showcasing the power of HTML and CSS in creating visually and interactive web pages."
            </p>
            <hr className="flex-grow border-t- border-blue-800 py-1 my-4" />
            <div className="Pro-btns py-11">
              <a
                href="https://github.com/nanakshrestha777/Web-development"
                className="ntm inline-block bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 text-xl text-center transition duration-600 rounded-lg hover:from-purple-600 hover:to-pink-900 ease bg-gradient-to-br from-purple-500 to-blue-700 md:w-auto"
                style={{
                  border: "2px solid white",
                  fontFamily: "YourCustomFont",
                  borderRadius: "20px 20px 20px 20px",
                }}
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;