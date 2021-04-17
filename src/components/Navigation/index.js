import React from "react";
import '../styles.css'

function Navigation() {
  return (
    <header className="nav-header">
       <h2>
        Jephte Borno
        </h2>
     
      <nav className="nav-bar">
        
        <ul className="ulist">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
          <a href="#portfolio">Portfolio</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
          <li>
          <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
