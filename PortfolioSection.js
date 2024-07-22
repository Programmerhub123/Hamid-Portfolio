import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Chat Application',
      description: 'A fully functional chat application which work like Social Media Apps. We can add someone for chat .',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/11/06/15/13/internet-1028794_1280.jpg',
      demoUrl: 'https://www.youtube.com/watch?v=XASY30EfGAc',
      codeUrl: 'https://github.com/Programmerhub123/Chat-Application',
    },
    {
      title: 'Blog Site',
      description: 'I have this fully functional blog site using React.js.This website contain all the functionality that should have a professional blog site.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      demoUrl: 'https://example.com/demo2',
      codeUrl: 'https://github.com/Programmerhub123/Bloging-site',
    },
    {
      title: 'Dashboard UI',
      description: 'This professional Dashboard has also been designed using React.js. It contains all the functionalities to mangage the UI of the user.',
      imageUrl: 'https://t4.ftcdn.net/jpg/02/70/95/21/360_F_270952103_2zSDVMWHM7KFOXmO0Dko0pYOE9aCs07k.jpg',
      demoUrl: 'https://example.com/demo3',
      codeUrl: 'https://github.com/Programmerhub123/Dashboard-UI',
    },
    {
      title: 'Movie Point',
      description: 'This site facilitate to user to search his movie of interest.If his search is completed he/she can watch movie otherwise can search for other available movie.',
      imageUrl: 'Movie Point.JPG',
      demoUrl: 'https://example.com/demo3',
      codeUrl: 'https://github.com/Programmerhub123/Movie-Point.git',
    },
    {
      title: 'Hamid Portfolio',
      description: 'This is my portfolio site that contain my detail of educaation,portfolio and expertise.',
      imageUrl: 'Hamid Portfolio.JPG',
      demoUrl: 'https://example.com/demo3',
      codeUrl: 'https://github.com/Programmerhub123/Movie-Point.git',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>

)}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
