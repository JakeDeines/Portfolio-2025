import React, { useEffect, useRef } from "react";
import "../styles/Main.css";
import ContactForm from "./ContactForm";

/* Lucide icons for non-Devicon items in Skills */
import { Workflow, Network, Flame } from "lucide-react";

/* --- Inline SVGs for GitHub + Globe (no external icon deps) --- */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.21.7-3.88-1.4-3.88-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.77.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.51.11-3.16 0 0 .98-.31 3.2 1.17a11.06 11.06 0 0 1 5.82 0c2.21-1.48 3.19-1.17 3.19-1.17.63 1.65.24 2.86.12 3.16.75.8 1.2 1.82 1.2 3.07 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.06.8 2.15v3.19c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12h18M12 3c3.5 4 3.5 14 0 18M12 3c-3.5 4-3.5 14 0 18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

function Main() {
  /* -------- Skills fade-in on scroll -------- */
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            // expose the stagger to CSS so the icon wrapper can share the delay
            entry.target.style.setProperty("--stagger", `${index * 120}ms`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    skillsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* -------- Projects staggered reveal -------- */
  const projectRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.stagger || 0);
            // faster: base .35s + .10s per card
            entry.target.style.animationDelay = `${0.35 + idx * 0.10}s`;
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    projectRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* -------- Skills grid (Devicon + Lucide) -------- */
  const skillsGrid = [
    { label: "JavaScript (ES6+)", type: "devicon", iconClass: "devicon-javascript-plain colored" },
    { label: "HTML5",              type: "devicon", iconClass: "devicon-html5-plain colored" },
    { label: "CSS3",               type: "devicon", iconClass: "devicon-css3-plain colored" },
    { label: "React.js",           type: "devicon", iconClass: "devicon-react-original colored" },

    { label: "Node.js",            type: "devicon", iconClass: "devicon-nodejs-plain colored" },
    { label: "MongoDB",            type: "devicon", iconClass: "devicon-mongodb-plain colored" },
    { label: "Express.js",         type: "devicon", iconClass: "devicon-express-original" }, // mono
    { label: "RESTful API",        type: "lucide",  icon: Network },

    { label: "MySQL",              type: "devicon", iconClass: "devicon-mysql-plain colored" },
    { label: "CI/CD",              type: "lucide",  icon: Workflow },
    { label: "Firestore",          type: "lucide",  icon: Flame },
    { label: "Google Cloud",       type: "devicon", iconClass: "devicon-googlecloud-plain colored" },

    // AWS wordmark with smile (colored)
    { label: "AWS",                type: "devicon", iconClass: "devicon-amazonwebservices-plain-wordmark colored" },

    { label: "Jest",               type: "devicon", iconClass: "devicon-jest-plain colored" },
    { label: "Git",                type: "devicon", iconClass: "devicon-git-plain colored" },
    { label: "GitHub",             type: "devicon", iconClass: "devicon-github-original colored" },
  ];

  /* -------- Projects -------- */
  const projects = [
    {
      title: "NutriSnap",
      img: `${process.env.PUBLIC_URL}/images/Portfolio NutriSnap.png`,
      alt: "NutriSnap app preview",
      desc:
        "An AI-powered nutrition analysis app that lets users upload food images and receive detailed nutritional info using GPT-4o's vision capabilities.",
      tech:
        "React · Node.js · Express · Multer · Sharp · OpenAI Vision API (GPT-4o) · AWS S3 · AWS Amplify",
      imageClass: "object-40",
      links: [
        { href: "https://github.com/JakeDeines/NutriSnap", label: "View Code", variant: "secondary" },
        { href: "https://nutrisnap-production-2c15.up.railway.app/", label: "Live Site" }
      ]
    },
    {
      title: "AI Chatbot",
      img: `${process.env.PUBLIC_URL}/images/Chatbot_chat_action3.png`,
      alt: "AI Chatbot app preview",
      desc:
        "A chatbot application powered by OpenAI's API. Includes modern UI features, message persistence, and AWS hosting for production use.",
      tech:
        "React · Node.js · Express · OpenAI API · AWS Amplify · AWS Cognito · GitHub",
      imageClass: "object-top",
      links: [
        { href: "https://github.com/JakeDeines/Chatbot", label: "View Code", variant: "secondary" },
        { href: "https://main.d3aa51l1wq81s7.amplifyapp.com/login", label: "Live Site" }
      ]
    },
    {
      title: "Sensor Data",
      img: `${process.env.PUBLIC_URL}/images/Looker-snip.png`,
      alt: "Sensor Data dashboard preview",
      desc:
        "A real-time simulated data stream that cleans and organizes readings, powering dashboards with insights and long-term trend analysis across equipment sensors.",
      tech:
        "Python · Flask · Firestore · Google Cloud Storage · BigQuery · GCP CLI · Looker Studio",
      imageClass: "object-center",
      links: [
        { href: "https://github.com/JakeDeines/sensor-data-dashboard", label: "View Code" }
      ]
    },
    {
      title: "SmartSuite",
      img: `${process.env.PUBLIC_URL}/images/smartsuite_etl_pipeline.png`,
      alt: "SmartSuite ETL preview",
      desc:
        "An Azure-based ETL pipeline for environmental room monitoring (Temp/RH/DP). Ingests data, validates ranges, and writes Parquet across Bronze → Silver → Gold layers.",
      tech:
        "Python · Azure Blob Storage · Azure Data Factory / Synapse Pipelines · Parquet · SQL · Power BI (planned)",
      imageClass: "object-center",
      links: [
        { href: "https://github.com/JakeDeines/SmartSuite", label: "View Code" }
      ]
    }
  ];

  /* Prefer live site for the image click, else first link */
  const primaryLink = (p) => {
    const live = p.links?.find(l => /live site/i.test(l.label));
    return (live || p.links?.[0] || {}).href || "#";
  };

  return (
    <main>
      {/* Welcome */}
      <section className="welcome">
        <h1 className="fade-in">Jacob Deines</h1>
        <h2 className="welcome-subtitle fade-in">Software Engineer</h2>
        <p>
          Hey, I'm Jacob! I build AI-powered, cloud based applications. Check out my work and let's build the future together.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills-grid">
          {skillsGrid.map((s, i) => {
            const LucideIcon = s.type === "lucide" ? s.icon : null;
            return (
              <li
                key={`${s.label}-${i}`}
                ref={el => (skillsRef.current[i] = el)}
                className="skill-item fade"
                title={s.label}
              >
                <span className="skill-icon-wrap" aria-hidden="true">
                  {s.type === "devicon" ? (
                    <i className={`${s.iconClass} skill-icon devicon`} />
                  ) : (
                    <LucideIcon className="skill-icon lucide" />
                  )}
                </span>
                <span className="skill-label">{s.label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards two-by-two">
          {projects.map((p, i) => (
            <div
              ref={el => (projectRefs.current[i] = el)}
              data-stagger={i}
              className={`card reveal ${p.cardClass || ""}`}
              key={p.title}
            >
              <div className={`card-image ${p.imageClass || ""}`}>
                <a
                  href={primaryLink(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>

              <div className="card-body">
                <h3 className="project-title">{p.title}</h3>

                <p className="project-description">{p.desc}</p>

                <p className="project-tech">
                  <strong>Tech Stack:</strong> {p.tech}
                </p>

                <div className="project-links">
                  {p.links.map(link => {
                    const isLive = /live site/i.test(link.label);
                    return (
                      <a
                        key={link.href}
                        className={link.variant === "secondary" ? "secondary" : ""}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} - ${link.label}`}
                      >
                        {isLive ? <GlobeIcon /> : <GitHubIcon />}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </main>
  );
}

export default Main;
