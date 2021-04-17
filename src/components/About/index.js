import React from "react";
import image from "../../assets/hero/myImage.png";

function About() {
  return (
    <section className="my-5">
      <div className="about-section">

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="about-me">
          <div className="name">Jephte Borno</div>
          <img
          src={image}
          className="my-2"
          style={{ width: "100%" }}
          alt="myImage"
        />
        </div>
      
      </div>
    </section>
  );
}
export default About;