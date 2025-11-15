import React, { useState, useEffect } from "react";
import Starfield from "./Starfield";
import resumeConfig from "../config/resumeConfig.json";

const Resume = () => {
  const [resumeUrls, setResumeUrls] = useState({
    pdf: resumeConfig.resumePdfUrl || "/resume.pdf",
    preview: resumeConfig.resumePreviewUrl || "/resume-preview.jpg",
  });

  useEffect(() => {
    // Check localStorage for updated resume URLs (from admin upload)
    const storedConfig = localStorage.getItem("resumeConfig");
    if (storedConfig) {
      try {
        const config = JSON.parse(storedConfig);
        if (config.resumePdfUrl) {
          setResumeUrls({
            pdf: config.resumePdfUrl,
            preview: config.resumePreviewUrl || resumeConfig.resumePreviewUrl || "/resume-preview.jpg",
          });
        }
      } catch (error) {
        console.error("Error parsing stored resume config:", error);
      }
    }
  }, []);

  return (
    <>
      <Starfield />

      <section id="resume" className="resume-section">
        {" "}
        {/* Removed `.section` */}
        <h2 className="section-title">📄 My Resume</h2>
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <img
            src={resumeUrls.preview}
            alt="Rajan Thakkar Full Stack Developer Resume - React Node.js JavaScript Expert Toronto Canada"
            title="Rajan Thakkar Developer Resume"
            loading="lazy"
            style={{
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 0 20px rgba(0,0,0,0.4)",
              borderRadius: "10px",
            }}
          />
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href={resumeUrls.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Full PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
