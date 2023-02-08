import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home_desc container">
        <h1 className="name_Home">Hi ____________, this is</h1>
        <h1 className="name_Home">Himanshu tariyal</h1>
        <h4 className="Career_home">Full stack developer</h4>
        <p className="description_home">
          I am very creative person with a good experience with many projects
          made for practice
        </p>
        <button className="home_btn btn btn-primary p-2">
          Portfolio <i className="bx bx-chevrons-right px-1"></i>
        </button>
      </div>
      <div className="home_img">
        <div className="img_background"></div>
        <img
          className="home_logo"
          src="https://i.pinimg.com/736x/cc/72/a8/cc72a8ed2f389ece2d478d9e791b08ba.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
