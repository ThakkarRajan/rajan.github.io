import React, { useState } from "react";
import Starfield from "./Starfield";
import resumeConfig from "../config/resumeConfig.json";

const Resume = () => {
  const [imageError, setImageError] = useState(false);
  
  // Use local files from public folder
  const resumeUrls = {
    pdf: resumeConfig.resumePdfUrl || "/resume.pdf",
    preview: resumeConfig.resumePreviewUrl || "/resume-preview.jpg",
  };

  return (
    <>
      <Starfield />

      <section id="resume" className="resume-section">
        {" "}
        {/* Removed `.section` */}
        <h2 className="section-title">📄 My Resume</h2>
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          {imageError ? (
            <div style={{
              maxWidth: "400px",
              width: "100%",
              margin: "0 auto",
              padding: "3rem",
              background: "rgba(107, 193, 255, 0.1)",
              border: "1px solid rgba(107, 193, 255, 0.3)",
              borderRadius: "10px",
              color: "#6bc1ff"
            }}>
              <p>📄 Resume preview unavailable</p>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#ccc" }}>
                Click below to view the PDF directly
              </p>
            </div>
          ) : (
            <img
              src={resumeUrls.preview}
              alt="Rajan Thakkar Full Stack Developer Resume - React Node.js JavaScript Expert Toronto Canada"
              title="Rajan Thakkar Developer Resume"
              loading="lazy"
              onError={() => setImageError(true)}
              style={{
                maxWidth: "400px",
                width: "100%",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                borderRadius: "10px",
              }}
            />
          )}
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
