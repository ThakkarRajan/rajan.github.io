import React from "react";
import "../styles.css";

const Navbar = () => {
  return (
    <nav className="floating-navbar">
      <ul className="capsule-nav">
        <li>
          <a href="#hero-section">Home</a>
        </li>
        <li>
          <a href="#timeline">Journey</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
