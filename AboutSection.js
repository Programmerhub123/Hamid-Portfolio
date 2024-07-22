import React, { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-header" onClick={toggleAbout}>
        <h2>About Me</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="about-content">
          <img src="boy1.png" alt="Your Name" className="about-image" />
          <h4>
          My name is Hamid Jabbar. I am a creative and dedicated website developer specializing in React.js, with two years of professional experience. Throughout my career, I have successfully developed numerous projects that have met and exceeded client expectations. My portfolio includes collaborations with several well-known companies, showcasing my ability to deliver high-quality web solutions. I hold a Master's degree in Computer Science (MCS), which has provided me with a strong foundation in both theoretical and practical aspects of web development. My passion for creating innovative and user-friendly web applications drives me to continually enhance my skills and stay updated with the latest industry trends.
          </h4>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
