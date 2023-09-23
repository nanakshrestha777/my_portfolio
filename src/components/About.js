import React from 'react'
import "./AboutStyles.css";
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
const About = () => {
  return (
    <div className='About'>
        <div className='About-container text-2xl text-center py-8'>
            <h1> Who am I?</h1>
            <p>
                I'm a data science student based in Birmingham City Univerisity, passionate about leveraging the power of data and technology to solve real-world problems. I have a strong enthusiasm for learning and continuously exploring new technologies in the ever-evolving field of data science.
            </p>
        </div>
        <div className="grid-container">
            <div className="left-box">
                <h1><span>Experience</span></h1>
                <div className="white-box-left mg-20">
                I have actively sought opportunities to apply my skills in real-world settings. I have collaborated with industry professionals on data science projects, participated in hackathons, and engaged in online communities to stay updated with the latest trends and advancements in the field.

                </div>
                
            </div>
            <div className="right-box">
                <h1><span>Skills</span></h1>
                <div className="white-box-left">

                </div>
            
            </div>
        </div>
    </div>

  )
}

export default About