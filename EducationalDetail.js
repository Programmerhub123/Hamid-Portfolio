import React, { useState } from 'react';
import './EducationalDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const EducationalDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const educationData = [
    {
      degree: 'MCS',
      institution: 'Islamia University Bahawalpur Bwn Campus',
      year: '2015'
    },
    {
      degree: 'BCS',
      institution: 'GOVT Rizvia Islamia Degree College Haroonabad',
      year: '2012'
    },
    {
      degree: 'FSC',
      institution: 'GOVT Rizvia Islamia Degree College Haroonabad',
      year: '2010'
    },
    {
      degree: 'HSC',
      institution: 'GOVT Model Secondary School',
      year: '2008'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-header" onClick={toggleExpand}>
        <h2>Education</h2>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="dropdown-icon" />
      </div>
      {isExpanded && (
        <div className="education-content">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className="details">{edu.details}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EducationalDetail;
