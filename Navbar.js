import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="profile-picture">
          <img src="boy1.png" alt="Profile" />
        </div>
        <a href="#home">Hamid Jabbar</a>
      </div>
      <ul className="navbar-links">
        <li><ScrollLink to="home" smooth={true} duration={500} offset={-70}>Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink></li>
        <li><ScrollLink to="portfolio" smooth={true} duration={500} offset={-70}>Portfolio</ScrollLink></li>
        <li><ScrollLink to="resume" smooth={true} duration={500} offset={-70}>Resume</ScrollLink></li>
        <li><ScrollLink to="education" smooth={true} duration={500} offset={-70}>Education</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact</ScrollLink></li>
      </ul>
      <div className="navbar-search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />
        {searchActive && (
          <input type="text" className="search-bar" placeholder="Search..." />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
