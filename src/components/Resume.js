import Starfield from "./Starfield";

const Resume = () => (
  <>
    <Starfield />

    <section id="resume" className="resume-section">
      {" "}
      {/* Removed `.section` */}
      <h2 className="section-title">📄 My Resume</h2>
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <img
          src="/resume-preview.jpg"
          alt="Rajan V. Thakkar Resume Preview"
          style={{
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            borderRadius: "10px",
          }}
        />
        <div style={{ marginTop: "1.5rem" }}>
          <a
            href="/resume.pdf"
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

export default Resume;
