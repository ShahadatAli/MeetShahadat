import React, { useEffect, useState } from "react";
import "../styling/Home.css";

const Hero = () => {
  const words = ["full-time developer.", "part-time designer."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(50);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(100);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  return (
    <div className="home-container">
      <div className="wrapper">
        <img src="./images/star-grey.png" className="intro-star" alt="" />

        {/* Group intro-text and button */}
        <div className="text-button-wrapper">
          <div className="intro-text">
            <h1 className="intro-name">Hi, I'm Shahadat.</h1>
            <h1 className="intro-details">
              A {text}
              <span className="cursor">|</span>
            </h1>
          </div>
        </div>

        <div className="art-image">
          <img src="./images/art.png" className="portfolio-img" alt="" />
        </div>
      </div>
      <div className="button-container">
        <button className="intro-btn hire-me">
          <span className="button-content">HIRE ME</span>
        </button>

        <div className="right-buttons">
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
      </div>

      <div className="bio-section-intro">
        <div className="bio-text">
          <h2 className="bio-intro">Intro</h2>
          <p className="bio-details">
            I’m a Software Engineer who enjoys bringing ideas to life with code.
            I’ve worked with awesome teams at Preneur Lab Limited and ShurjoPay
            Limited, building custom softwares that actually solves real
            problems.
          </p>
        </div>

<div className="video-container">
  <iframe
    loading="lazy"
    src="https://www.youtube.com/embed/PjtrXAWYJNw?si=rL21kjAq9qLPPdgw"
    title="Intro Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="video-frame"
  ></iframe>
</div>
      </div>

      <div className="bio-section-project">
        <div className="project-image">
          <img
            src="./images/bat-project.png"
            className="bat-project-img"
            alt="BAT Project"
          />
        </div>

        <div className="project-text">
          <h2 className="bio-project">A Project Close to My Heart</h2>
          <p className="bio-details">
            One of the most fun and fulfilling projects I’ve worked on was a
            Canteen Management System for{" "}
            <strong>British American Tobacco Bangladesh</strong>{" "}
            <img src="./images/BAT.png" className="bat-logo" alt="BAT Logo" />.
            The goal? To reduce food wastage and boost efficiency in their daily
            operations.
          </p>
          <p className="bio-details">
            What made it extra special was that I was given full freedom—from
            building the software from scratch to integrating it with RFID
            scanners at their Savar factory. Along the way, I also got to meet
            and collaborate with stakeholders, understand their operations up
            close, and gain valuable insight into how large factories run. It
            was more than just a coding task—it was a full-stack adventure that
            sharpened both my technical and people skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
