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
    
    {/* NutriSnap Project */}
    <div className="card">
      <a href="#">
        <img src={`${process.env.PUBLIC_URL}/images/Portfolio NutriSnap.png`} alt="NutriSnap" />
        <p className="project-title">NutriSnap</p>
      </a>
      <p className="project-description">An AI-powered app for analyzing nutritional content of food images.</p>
      <div className="project-links">
        <a href="https://github.com/yourusername/nutrisnap" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-code"></i> View Code
        </a>
        <a href="https://nutrisnap.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-link"></i> Live Site
        </a>
      </div>
    </div>
    
    {/* AI Chatbot Project */}
    <div className="card">
      <a href="#">
        <img src={`${process.env.PUBLIC_URL}/images/Portfolio Chatbot 2.jpeg`} alt="AI Chatbot" />
        <p className="project-title">AI Chatbot</p>
      </a>
      <p className="project-description">A chatbot application powered by OpenAI's API.</p>
      <div className="project-links">
        <a href="https://github.com/yourusername/ai-chatbot" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-code"></i> View Code
        </a>
        <a href="https://aichatbot.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-link"></i> Live Site
        </a>
      </div>
    </div>
    
    {/* GeoSnap Project */}
<div className="card">
  <a href="#">
    <img src={`${process.env.PUBLIC_URL}/images/Portfolio GeoSnap.jpg`} alt="GeoSnap" />
    <p className="project-title">GeoSnap</p>
  </a>
  <p className="project-description">A geolocation-based photo-sharing app with map integration.</p>
  <div className="project-links">
    <a href="https://github.com/yourusername/geosnap" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-code"></i> View Code
    </a>
    <a href="https://geosnap.com" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-link"></i> Live Site
    </a>
  </div>
</div>

  </div>
</section>
      <ContactForm />
    </main>
  );
}

export default Main;
