import React, { useState } from "react";
import "../styles.css";

const AdminResumeUpload = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [resumePdf, setResumePdf] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [cloudName, setCloudName] = useState("");
  const [uploadPreset, setUploadPreset] = useState("");
  const [currentResume, setCurrentResume] = useState(null);

  // Simple password check (you can change this password)
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || "change-this-password";

  const handleLogin = (e) => {
    e.preventDefault();
    // Debug: Check if env variable is loaded (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Expected password:', ADMIN_PASSWORD ? 'Set' : 'Not set');
    }
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage("");
      // Load Cloudinary config from env
      setCloudName(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "");
      setUploadPreset(process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "");
      
      // Load current resume config
      const storedConfig = localStorage.getItem("resumeConfig");
      if (storedConfig) {
        try {
          setCurrentResume(JSON.parse(storedConfig));
        } catch (error) {
          console.error("Error parsing stored config:", error);
        }
      }
    } else {
      setMessage(`Incorrect password. Access denied. (Hint: Check browser console for debug info)`);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setMessage("✅ URL copied to clipboard!");
      setTimeout(() => setMessage(""), 2000);
    });
  };

  const uploadToCloudinary = async (file, folder = "resume") => {
    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary configuration missing. Please set REACT_APP_CLOUDINARY_CLOUD_NAME and REACT_APP_CLOUDINARY_UPLOAD_PRESET");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", folder);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage("");

    try {
      let pdfUrl = null;
      let previewUrl = null;

      // Upload PDF if provided
      if (resumePdf) {
        setMessage("Uploading PDF...");
        pdfUrl = await uploadToCloudinary(resumePdf, "resume");
        setMessage("PDF uploaded successfully! Uploading preview image...");
      }

      // Upload preview image if provided
      if (resumePreview) {
        previewUrl = await uploadToCloudinary(resumePreview, "resume");
        setMessage("Preview image uploaded successfully!");
      }

      // Update config file (for GitHub Pages, we'll need to update the JSON)
      // For now, we'll store it in localStorage and show instructions
      const config = {
        resumePdfUrl: pdfUrl || JSON.parse(localStorage.getItem("resumeConfig") || "{}").resumePdfUrl || "/resume.pdf",
        resumePreviewUrl: previewUrl || JSON.parse(localStorage.getItem("resumeConfig") || "{}").resumePreviewUrl || "/resume-preview.jpg",
        lastUpdated: new Date().toISOString().split("T")[0],
      };

      localStorage.setItem("resumeConfig", JSON.stringify(config));
      setCurrentResume(config);
      
      setMessage(
        `✅ Upload successful! 
        
PDF URL: ${pdfUrl || "Not updated"}
Preview URL: ${previewUrl || "Not updated"}

⚠️ IMPORTANT: To make this permanent, you need to update src/config/resumeConfig.json with these URLs:
${JSON.stringify(config, null, 2)}

Or rebuild your site to use localStorage values.`
      );

      // Reset form
      setResumePdf(null);
      setResumePreview(null);
      document.getElementById("resume-pdf-input").value = "";
      document.getElementById("resume-preview-input").value = "";

      // Reload page after 3 seconds to see updated resume
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>🔐 Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              required
            />
            <button type="submit" className="admin-btn">
              Login
            </button>
          </form>
          {message && <p className="admin-message">{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-upload-container">
      <div className="admin-upload-box">
        <h2>📄 Resume Upload</h2>
        <p className="admin-instructions">
          Upload your resume PDF and preview image. They will be stored in Cloudinary and automatically update on your portfolio.
        </p>

        {currentResume && (
          <div className="current-resume-info">
            <h3>📋 Current Resume</h3>
            <div className="resume-url-display">
              <div className="url-item">
                <strong>PDF:</strong>
                <span className="url-text" title={currentResume.resumePdfUrl}>
                  {currentResume.resumePdfUrl.length > 50 
                    ? currentResume.resumePdfUrl.substring(0, 50) + "..." 
                    : currentResume.resumePdfUrl}
                </span>
                <button 
                  type="button"
                  onClick={() => copyToClipboard(currentResume.resumePdfUrl)}
                  className="copy-btn"
                  title="Copy URL"
                >
                  📋
                </button>
                <a 
                  href={currentResume.resumePdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-btn"
                  title="View PDF"
                >
                  🔗
                </a>
              </div>
              <div className="url-item">
                <strong>Preview:</strong>
                <span className="url-text" title={currentResume.resumePreviewUrl}>
                  {currentResume.resumePreviewUrl.length > 50 
                    ? currentResume.resumePreviewUrl.substring(0, 50) + "..." 
                    : currentResume.resumePreviewUrl}
                </span>
                <button 
                  type="button"
                  onClick={() => copyToClipboard(currentResume.resumePreviewUrl)}
                  className="copy-btn"
                  title="Copy URL"
                >
                  📋
                </button>
                <a 
                  href={currentResume.resumePreviewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-btn"
                  title="View Image"
                >
                  🔗
                </a>
              </div>
              {currentResume.lastUpdated && (
                <div className="last-updated">
                  <strong>Last Updated:</strong> {currentResume.lastUpdated}
                </div>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="upload-field">
            <label htmlFor="resume-pdf-input">Resume PDF:</label>
            <input
              id="resume-pdf-input"
              type="file"
              accept=".pdf"
              onChange={(e) => setResumePdf(e.target.files[0])}
              className="admin-file-input"
            />
            {resumePdf && <span className="file-name">✓ {resumePdf.name}</span>}
          </div>

          <div className="upload-field">
            <label htmlFor="resume-preview-input">Preview Image (JPG/PNG):</label>
            <input
              id="resume-preview-input"
              type="file"
              accept="image/*"
              onChange={(e) => setResumePreview(e.target.files[0])}
              className="admin-file-input"
            />
            {resumePreview && <span className="file-name">✓ {resumePreview.name}</span>}
          </div>

          <button
            type="submit"
            disabled={uploading || (!resumePdf && !resumePreview)}
            className="admin-btn admin-btn-primary"
          >
            {uploading ? "Uploading..." : "Upload Resume"}
          </button>

          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="admin-btn admin-btn-secondary"
          >
            Logout
          </button>
        </form>

        {message && (
          <div className="admin-message-box">
            <pre className="admin-message">{message}</pre>
          </div>
        )}

        <div className="admin-info">
          <h3>Setup Instructions:</h3>
          <ol>
            <li>Create a free Cloudinary account at <a href="https://cloudinary.com" target="_blank" rel="noopener noreferrer">cloudinary.com</a></li>
            <li>Get your Cloud Name from the dashboard</li>
            <li>Create an Upload Preset (Settings → Upload → Upload Presets → Add upload preset)</li>
            <li>Set signing mode to "Unsigned" for the preset</li>
            <li>Add these to your .env file:
              <pre>
{`REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
REACT_APP_ADMIN_PASSWORD=your-secure-password`}
              </pre>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AdminResumeUpload;

