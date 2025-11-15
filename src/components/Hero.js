import React from "react";
import "../styles.css";
import Starfield from "./Starfield";

const Hero = () => (
  <>
    <Starfield />
    <header className="hero-section" id="hero-section" itemScope itemType="https://schema.org/Person">
      <div className="hero-3d-card">
        <div className="card-content">
          <h1>
            Hi, I'm <span itemProp="name">Rajan V. Thakkar</span>{" "}
            <span className="wave-emoji" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          <p itemProp="jobTitle">Full Stack Developer | <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Toronto</span>, <span itemProp="addressCountry">Canada</span></span></p>
          <p itemProp="description">
            <strong>Rajan</strong> is an expert <strong>developer</strong> specializing in scalable web/mobile apps, AI tools & backend systems. Hire a skilled <strong>developer</strong> for your next project.
          </p>
          <div>
            <a href="#projects" className="btn" aria-label="Explore Rajan's developer projects">
              Explore Projects
            </a>
          </div>
          <div className="hero-links">
            <a
              href="https://www.linkedin.com/in/thakkarrajanca/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <svg
                height="28"
                viewBox="0 0 24 24"
                width="28"
                fill="currentColor"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                  2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 
                  1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 
                  1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.867-3.061-1.867 
                  0-2.153 1.459-2.153 2.969v5.696h-3v-10h2.881v1.367h.041c.401-.759 
                  1.381-1.561 2.841-1.561 3.039 0 3.6 2.001 3.6 
                  4.604v5.59z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/thakkarrajan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg
                height="28"
                viewBox="0 0 16 16"
                width="28"
                fill="currentColor"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 
                  2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                  1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                  0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 
                  0 1.36.09 2 .27 1.53-1.04 2.2-.82 
                  2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
                  1.27.82 2.15 0 3.07-1.87 3.75-3.65 
                  3.95.29.25.54.73.54 1.48 0 1.07-.01 
                  1.93-.01 2.2 0 .21.15.46.55.38A8.013 
                  8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Hero;
