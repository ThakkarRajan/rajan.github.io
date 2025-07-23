import React from "react";
import "../styles.css";
import RevealOnScroll from "./RevealOnScroll";
import Starfield from "./Starfield";

const projects = [
  {
    title: "I Love Resumes",
    type: "Web App",
    icon: "🚀",
    description:
      "An AI-powered resume tailoring tool with smart job matching, live editing, and PDF/Word export.",
    link: "https://iloveresumes.com",
    priority: 1,
  },
  {
    title: "Caliber Construction Dashboard",
    type: "Web App",
    icon: "🏗️",
    description:
      "A project dashboard built with React and Node for construction teams to track tasks and analytics.",
    priority: 2,
  },
  {
    title: "Liftmates Car-pool APK",
    type: "Mobile App",
    icon: "🚗",
    link: "https://github.com/ThakkarRajan/liftmates-master",
    description:
      "A real-time carpooling app to simplify commutes with Firebase tracking and login.",
  },
  {
    title: "Harsmo Ventures Website",
    type: "Business Website",
    icon: "🚢",
    link: "https://harsmo-ventures-1syw.vercel.app/",
    description:
      "A responsive and professional React-based website built for an international import-export company, showcasing their services, company profile, and contact info with modern UI/UX design.",
  },
  {
    title: "Lavish Look Salon Website",
    type: "Website",
    icon: "💇",
    link: "https://salon-website-eta.vercel.app/",
    description:
      "A stylish website for a local salon featuring services, Google Maps, and online booking.",
  },
  {
    title: "Weather APK",
    type: "Mobile App",
    icon: "🌤️",
    link: "https://github.com/ThakkarRajan/Weather-App",
    description:
      "A minimal weather app that gives you accurate local forecasts using OpenWeather API.",
  },
  {
    title: "NaturalWalk IPA",
    type: "Mobile App",
    icon: "🌿",
    link: "https://github.com/ThakkarRajan/NaturalWalk-iOS-Application",
    description:
      "A mindfulness and walking tracker built with clean UI and GPS integration.",
  },
  {
    title: "News APK",
    type: "Mobile App",
    icon: "📰",
    link: "https://github.com/ThakkarRajan/News-Application",
    description:
      "Stay updated with this dynamic news app using modern API feeds and swipeable UI.",
  },
  {
    title: "My Alarm APK",
    type: "Mobile App",
    icon: "⏰",
    link: "https://github.com/ThakkarRajan/MyAlarmByRajan",
    description:
      "A simple alarm clock app with snooze, sound options, and beautiful dark mode UI.",
  },
];

const ProjectsPage = () => {
  const sorted = [...projects].sort(
    (a, b) => (a.priority || 99) - (b.priority || 99)
  );

  return (
    <>
      <Starfield />

      <section id="projects" className="projects-section">
        <h2 className="section-title">💼 My Projects</h2>
        <RevealOnScroll>
          <div className="projects-grid">
            {sorted.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="emoji">{project.icon}</div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a
                    className="btn"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
        <div className="wave-overlay">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#6bc1ff10"
              fillOpacity="1"
              d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,234.7C672,256,768,224,864,202.7C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160V320H0Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
