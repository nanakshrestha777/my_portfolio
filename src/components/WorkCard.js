import "./WorkCardStyles.css";
import img1 from "../assets/nguess.jpg";
import React from "react";

import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-caontainer">
      {/* <h1 className="Project-heading">Projects</h1> */}

      <h1 className="Project-heading text-4xl font-bold text-center mb-12 glow-effect">
        Projects
      </h1>
      <div className="Project-container">
        <div className="Project-card">
          <img src={img1} alt="img" />

          <h2 className="text-2xl text-center py-5">
            <span className="inline-block animate-pulse text-white">
              Guess the number using Python
            </span>
          </h2>
          <div className="Pro-details">
            <p>
              "Guess the Number - game using Python. Players have to guess a
              randomly generated number between 1 and 100. The game provides
              feedback on each guess, and players aim to guess the number
              correctly in the fewest attempts possible. It's a fun and
              interactive project that showcases basic programming concepts and
              user input handling."
            </p>

            <div className="Pro-btns">
              <a
                href="https://github.com/nanakshrestha777/guessthenumber"
                className="ntm inline-block bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 text-xl text-center transition duration-600 rounded-lg hover:from-purple-600 hover:to-pink-900 ease bg-gradient-to-br from-purple-500 to-blue-700 md:w-auto"
                style={{
                  border: "2px solid white",
                  fontFamily: "YourCustomFont",
                  borderRadius: "20px 90px 20px 90px",
                }}
              >
                Source
              </a>
            </div>
            {/* <div className="Pro-btns">
                <a href="https://github.com/nanakshrestha777/guessthenumber" class="ntm inline-block bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 text-xl text-center transition duration-600 rounded-lg hover:from-purple-600 hover:to-pink-900 ease bg-gradient-to-br from-purple-500 to-blue-700 md:w-auto" style={{border: '2px solid white', fontFamily: 'YourCustomFont'}}>
                    Source
                 </a>
          
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
