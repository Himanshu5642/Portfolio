import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [nav, setnav] = useState("");
  return (
    <footer>
      <div id="footer" className="footer">
        <ul className="footer_list">
          <h3 className="footer_heading">Himanshu</h3>
          <div className="list_items">
            <li className="list_item">
              <a href="#about" onClick={() => setnav("About")}>
                About
              </a>
            </li>
            <li className="list_item">
              <a href="#skills" onClick={() => setnav("Skills")}>
                Skills
              </a>
            </li>
            <li className="list_item">
              <a href="#contact" onClick={() => setnav("Contact")}>
                Contact
              </a>
            </li>
          </div>
          <div className="list_logos">
            <a href="#whatsapp" className="list_logo">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#telegram" className="list_logo">
              <i className="bx bxl-telegram"></i>
            </a>
            <a href="#email" className="list_logo">
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
