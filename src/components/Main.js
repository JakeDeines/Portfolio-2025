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
          {["JavaScript (ES6+)", "HTML5", "CSS3", "React.js", "Node.js", "MongoDB", "Express.js", "RESTful API", "MySQL", "CI/CD", "Firestore", "Google Cloud", "AWS", "Jest", "Git"].map((skill, index) => (
            <li
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="fade"
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
    <a href="/" onClick={(e) => e.preventDefault()}>
      <img src={`${process.env.PUBLIC_URL}/images/Portfolio NutriSnap.png`} alt="NutriSnap" />
    </a>
  </div>

  <h3 className="project-title">NutriSnap</h3>

  <p className="project-description">
    An AI-powered nutrition analysis app that lets users upload food images and receive detailed nutritional info using GPT-4o's vision capabilities.
  </p>

  <p className="project-tech">
    <strong>Tech Stack:</strong> React · Node.js · Express · Multer · Sharp · OpenAI Vision API (GPT-4o) · AWS S3 · AWS Amplify
  </p>

  <div className="project-links">
    <a href="https://github.com/JakeDeines/NutriSnap" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-code"></i> View Code
    </a>
    <a href="https://nutrisnap-production-2c15.up.railway.app/" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-link"></i> Live Site 
    </a>
  </div>
</div>


         {/* AI Chatbot Project */}
         <div className="card">
  <div className="card-image">
    <a href="/" onClick={(e) => e.preventDefault()}>
      <img src={`${process.env.PUBLIC_URL}/images/Chatbot_chat_action3.png`} alt="AI Chatbot" />
    </a>
  </div>

  <h3 className="project-title">AI Chatbot</h3>

  <p className="project-description">
    A chatbot application powered by OpenAI's API. Includes modern UI features, message persistence, and AWS hosting for production use.
  </p>

  <p className="project-tech">
    <strong>Tech Stack:</strong> React · Node.js · Express · OpenAI API · AWS Amplify · AWS Cognito · GitHub
  </p>

  <div className="project-links">
    <a href="https://github.com/JakeDeines/Chatbot" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-code"></i> View Code
    </a>
    <a href="https://main.d3aa51l1wq81s7.amplifyapp.com/login" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-link"></i> Live Site 
    </a>
  </div>
</div>


         {/* Sensor Data Cloud App */}
         <div className="card">
  <div className="card-image">
    <a href="/" onClick={(e) => e.preventDefault()}>
      <img src={`${process.env.PUBLIC_URL}/images/Looker snip.png`} alt="Sensor Data App" />
    </a>
  </div>

  <h3 className="project-title">Sensor Data</h3>

  <p className="project-description">
    A cloud-native pipeline that processes real-time sensor readings for analytics and dashboarding.
  </p>

  <p className="project-tech">
    <strong>Tech Stack:</strong> Python · Flask · Firestore · Google Cloud Storage · BigQuery · GCP CLI · Looker Studio
  </p>

  <div className="project-links">
    <a href="https://github.com/JakeDeines/sensor-data-dashboard" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-code"></i> View Code
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