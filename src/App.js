import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import Timeline from "./components/Timeline";

import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <ProjectsPage /> {/* ⬅️ New section here */}
      <Resume />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
