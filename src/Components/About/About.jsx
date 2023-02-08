import React from "react";
import "./About.css";
import Desc from "./Desc";

const About = () => {
  return (
    <section id="about">
      <div className="about_div container">
        <h2 className="about_title">About Me</h2>
        <span className="about_subtitle">My Description</span>
        <div className="about_img">
          <img
            src="https://tuckerthereader.files.wordpress.com/2018/05/about-me-leon-severan-we-buy-houses.jpg"
            alt=""
          />
          <div className="about_desc">
            <Desc />
            <p className="about_para">
              I am able to handle multiple tasks on a daily basis and I am
              always energetic and eager to learn new skills. Proficient in a
              variety of programming languages and frameworks, including
              frontend and backend languages.
            </p>
            <a download="#" href="#CV" className="about_cv">
              Download CV<i className="bx bxl-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
