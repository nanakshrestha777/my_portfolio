import "./NavbarStyles.css"
import React, {useState} from "react";
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
    /* use of useState hook for hamburger */
    const[click, onclick] = useState(false);
    /*Event handling */
    const handleclick = () => onclick(!click);
    console.log(click)
    const[color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);

        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" :"header" }>
        <Link to={"/"}>
            <h1>DataWhiz.</h1>
        </Link>
        {/* if clicked nav-menu.active else nav-menu */}
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/project"}>Project</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleclick}>
            {click ? (
            <FaTimes size={20} style={{
            color: "#000" }} />
            ) : (
            <FaBars size={20} style={{color: "#000" }}
            />
            )}

          


        </div>
    </div>
  )
}

export default Navbar