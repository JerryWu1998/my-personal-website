import React from 'react';
import './styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="container">
      <div className="about-me">
        <h2>About Me</h2>
        <p className="name">Name: Yu Wu</p>
        <p className="education">Undergraduate: University of Washington, Seattle</p>
        <p className="education">Major: Applied Physics</p>
        <p className="education">Graduate School: Columbia University</p>
        <p className="education">Program: Master of Science in Electrical Engineering</p>
        <p>
          GitHub: <a href="https://github.com/JerryWu1998">My GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
