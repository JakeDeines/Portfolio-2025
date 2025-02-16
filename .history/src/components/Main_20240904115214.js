import React from 'react';
import '../styles/Main.css';
import ContactForm from './ContactForm';

function Main() {
  return (
    <main>
      <section className="welcome">
        <h1>Jacob Deines</h1>
        <h2>About</h2>
        <p> Hi there! I'm  a Full Stack Developer. I create sleek, user-friendly digital experiences using the latest technologies. Explore my projects and let's connect!</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Express</li>
          <li>Git & GitHub</li>
          <li>MySQL</li>
          <li>API Development</li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="card">
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/Portfolio NutriSnap.png`} alt="NutriSnap" />
              <p>NutriSnap</p>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}'\images\Portfolio Chatbot 2.jpeg`} alt="AI Chatbot" />
              <p>AI Chatbot</p>
            </a>
          </div>
          <div className="card">
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/images/Portfolio GeoSnap.jpg`} alt="GeoSnap" />
              <p>GeoSnap</p>
            </a>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}

export default Main;
