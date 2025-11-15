import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import AdminResumeUpload from "./components/AdminResumeUpload";

import Timeline from "./components/Timeline";

import ProjectsPage from "./components/ProjectsPage";
import Blog from "./components/Blog";
import ContactPage from "./components/ContactPage";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check if URL hash is #admin
    if (window.location.hash === "#admin") {
      setShowAdmin(true);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      setShowAdmin(window.location.hash === "#admin");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (showAdmin) {
    return <AdminResumeUpload />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <ProjectsPage />
      <Resume />
      <ContactPage />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
