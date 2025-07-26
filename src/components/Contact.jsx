import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styling/Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
            <div className="intro-text contact-intro"><h1 className="project-heading">Contact</h1>
            </div>
      <div className="card-container">
        <div className="info-container">
          <h1>Get In Touch</h1>
          <div className="info-details">
            <i class="fa fa-envelope"></i>
            <p>shahadat.leo666@gmail.com</p>
          </div>
          <div className="info-details">
            <i class="fa fa-phone"></i>
            <p>+880 1627 166 626</p>
          </div>
          <div className="info-details">
            <i class="fa fa-map-marker"></i>
            <p>Dhaka, Bangladesh</p>
          </div>
          <a
            href="https://www.facebook.com/meetshahadat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="intro-btn facebook-btn">
              <span className="button-content">
                <i class="fa-brands fa-facebook-f"></i>
              </span>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/meet-shahadat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="intro-btn linkedin-btn">
              <span className="button-content">
                <i class="fa-brands fa-linkedin-in"></i>
              </span>
            </button>
          </a>

          <a
            href="https://github.com/ShahadatAli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="intro-btn linkedin-btn">
              <span className="button-content">
                <i class="fa-brands fa-github"></i>
              </span>
            </button>
          </a>
        </div>
        
        <div className="form-container">
          <h2 className="contact-title">Let's talk</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
            />
            <button type="submit" className="intro-btn"><span className="button-content">SUBMIT</span></button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
