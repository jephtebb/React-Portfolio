import React from "react";
import image from "../../assets/hero/myImage.png";

function About() {
  return (
    <section id="about" className="my-5">
      <div className="about-section">

        <p className="description">
        I am a recent graduate of the coding bootcamp at the University of Central Florida. I am officially a full Stack Web Developer.
        I am currently looking for job as either front-end developer or back-end. 
        I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.
        I like dabbling in various parts of frontend and back-end development and like to learn about new technologies.
        
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