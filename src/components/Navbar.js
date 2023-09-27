import "./NavbarStyles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={`header ${color ? "header-bg" : ""}`}>
      <Link to={"/"}>
        <h1 className="navbar-logo text-3xl font-bold text-pink-800 uppercase tracking-wide shadow-lg glow hover:animate-pulse">
          Datawiz.NK
        </h1>
      </Link>

      <ul className={`nav-menu ${click ? "active" : ""}`}>
        <li>
          <Link
            to={"/"}
            className={`${
              window.location.pathname === "/" ? "active:bg-yellow-500" : ""
            } hover:text-blue-600`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/project"}
            className={`${
              window.location.pathname === "/project" ? "active:bg-green-500" : ""
            } hover:text-blue-600`}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className={`${
              window.location.pathname === "/about" ? "active:bg-red-500" : ""
            } hover:text-blue-600`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={"/contact"}
            className={`${
              window.location.pathname === "/contact" ? "active:bg-blue-500" : ""
            } hover:text-blue-600`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes
            size={20}
            style={{
              color: "#fff",
            }}
          />
        ) : (
          <FaBars
            size={20}
            style={{
              color: "#fff",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
