import React from "react";
import "./Contact.css";
import Talk from "./Talk";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section_title text-center mb-4">Contact Me</h2>

      <div className="contact_container">
        <Talk />
        <div className="contact_content">
          <h3 className="contact_title text-center mb-2">Message Me</h3>

          <form className="contact_form">
            <div className="contact__form_div">
              <label className="contact__form_tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
              <label className="contact__form_tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
              <label className="contact__form_tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-textarea"
                placeholder="write your message"
              ></textarea>
            </div>
            <button type="submit" className="form_btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
