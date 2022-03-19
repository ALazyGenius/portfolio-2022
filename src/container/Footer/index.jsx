import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./styles.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name,
      email,
      message
    };
    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  const validateEmail = (mail) => {
    var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailFormat);
  };

  return (
    <>
      <h2 className="head-text">Take A Coffee and Chat With Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:akashmishramac13@gmail.com" className="p-text">
            akashmishramac13@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile" />
          <a href="tel: +91 8585952877" className="p-text">
            +91 8585952877
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button
            disabled={!validateEmail(formData.email)}
            type="button"
            className="p-text"
            onClick={handleSubmit}
          >
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <h3 className="head-text">Thank you for getting in touch.</h3>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
