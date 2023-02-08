import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activenav, setActivenav] = useState("#main");

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="nav container">
          <a className="nav_logo navbar-brand" href="/">
            Himanshu
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="container collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="mx-auto"></div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link home-link ${
                    activenav === "#home" ? "active_link" : ""
                  }`}
                  aria-current="page"
                  href="/"
                  // onClick={() => setActivenav("#home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link about-link ${
                    activenav === "#about" ? "active_link" : ""
                  }`}
                  href="#about"
                  onClick={() => setActivenav("#about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link skills-link ${
                    activenav === "#skills" ? "active_link" : ""
                  }`}
                  href="#skills"
                  onClick={() => setActivenav("#skills")}
                >
                  Skills
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#Portfolio">Portfolio</a>
              </li> */}
              <li className="nav-item">
                <a
                  className={`nav-link contact-link ${
                    activenav === "#contact" ? "active_link" : ""
                  }`}
                  href="#contact"
                  onClick={() => setActivenav("#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
