import React from "react";
import "./Skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills_section">
        <h2 className="skills_section_title text-center">Skills</h2>

        <div className="skills_container">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
