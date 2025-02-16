import React, { useEffect, useRef } from "react";
import "../styles/Main.css";
import ContactForm from "./ContactForm";

function Main() {
  const skillsRef = useRef([]); // Store references to skill items

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.style.animationDelay = `${index * 150}ms`; // Staggered effect
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% of the item is visible
    );

    // Observe each skill list item
    skillsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <main>
      <section className="welcome">
        <h1 className="fade-in">Jacob Deines</h1>
        <h2 className="fade-in">Full Stack Developer</h2>
        <p>
          Hey, I'm Jacob! I build clean, intuitive, and efficient web applications. 
          Check out my work and let's build something great together!
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {[
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "React.js",
            "Node.js",
            "jQuery",
            "Express.js",
            "RESTful API",
            "MySQL",
            "GitHub",
            "CI/CD",
            "Postman",
            "Bash",
            "AWS",
            "Jest",
          ].map((skill, index) => (
            <li
              key={index}
              ref={(el) => (skillsRef.current[index] = el)} // Store ref properly
              className="fade" // Starts hidden, fades in on scroll
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {/* NutriSnap Project */}
          <div className="card">
            <div className="card-image">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Portfolio NutriSnap.png`}
                  alt="NutriSnap"
                />
              </a>
            </div>
            <div className="card-body">
              <h3 className="project-title">NutriSnap</h3>
              <p className="project-description">
                An AI-powered app for analyzing nutritional content of food images.
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/JakeDeines/NutriSnap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code"></i> View Code
              </a>
              <a
                href="https://nutrisnap-production-2c15.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link"></i> Live Site
              </a>
            </div>
          </div>

          {/* AI Chatbot Project */}
          <div className="card">
            <div className="card-image">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Portfolio Chatbot 2.jpeg`}
                  alt="AI Chatbot"
                />
              </a>
            </div>
            <div className="card-body">
              <h3 className="project-title">AI Chatbot</h3>
              <p className="project-description">
                A chatbot application powered by OpenAI's API.
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/JakeDeines/Chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code"></i> View Code
              </a>
              <a
                href="https://github.com/JakeDeines/Chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link"></i> Live Site
              </a>
            </div>
          </div>

          {/* GeoSnap Project */}
          <div className="card">
            <div className="card-image">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Portfolio GeoSnap.jpg`}
                  alt="GeoSnap"
                />
              </a>
            </div>
            <div className="card-body">
              <h3 className="project-title">GeoSnap</h3>
              <p className="project-description">
                A geolocation-based photo-sharing app with map integration.
              </p>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/yourusername/geosnap"
                target="_blank"
                rel="noopener noreferrer"
              >
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
