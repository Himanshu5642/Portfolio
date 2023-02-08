import React from "react";

const Talk = () => {
  return (
    <div className="talk">
      <h3 className="talk_heading text-center mb-2">Talk to me</h3>
      <div className="talk_boxes">
        <div className="talk_box">
          <i className="bx bx-envelope"></i>
          <h6 className="talk_name">Email</h6>
          <span className="talk_title">user@gmail.com</span>
          <a href="#email" className="contact_button">
            Write me <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
        <div className="talk_box">
          <i className="bx bxl-whatsapp-square"></i>
          <h6 className="talk_name">Whatsapp</h6>
          <span className="talk_title">999-888-666</span>
          <a href="#wp" className="contact_button">
            Write me <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
        <div className="talk_box">
          <i className="bx bxl-instagram"></i>
          <h6 className="talk_name">Instagram</h6>
          <span className="talk_title">user</span>
          <a href="#email" className="contact_button">
            Write me <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Talk;
