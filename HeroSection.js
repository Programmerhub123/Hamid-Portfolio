import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Hamid Jabbar</h1>
        <p>Creative Web Developer & Designer</p>
        <a href="#portfolio" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
}

export default HeroSection;
