import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contact-form-box-container">
      <div className="contact-form-left">
        <h3>
          You'd love to Click <br /> with us
        </h3>
        <h5>Join with thousands of other photographers</h5>
      </div>
      <div className="contact-form-right">
        <h4>Contact Us</h4>
        <h6>Register as a photographer</h6>
        <form action="">
          <div className="">
            <label htmlFor="first-name">
              <h6>First name</h6>
              <input
                type="text"
                placeholder="Enter your first name"
                id="first-name"
              />
            </label>
            <label htmlFor="last-name">
              <h6>last name</h6>
              <input
                type="text"
                placeholder="Enter your last name"
                id="last-name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <h6>Email</h6>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
              />
            </label>
            <label htmlFor="phone">
              <h6>Phone</h6>
              <input
                type="number"
                placeholder="Enter your phone number"
                id="phone"
              />
            </label>
          </div>
          <button className="button-6" type="submit">Submit --{">"}</button>
          <div className="">
            <h6>Email Us</h6>
            <a href="https://www.google.com">xoxo@gmail.com</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
