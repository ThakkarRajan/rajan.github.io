import React from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";

const projects = [
  {
    id: 1,
    title: "Liftmates Car-pool APK",
    imageUrl: "https://i.ibb.co/Bj81nv8/logo.png",
    link: "https://github.com/ThakkarRajan/liftmates-master/",
  },
  {
    id: 2,
    title: "Lavish Look Salon Website",
    imageUrl:
      "https://salon-website-eta.vercel.app/static/media/logo.c12e84e7a24a78254c4c.jpg",
    link: "https://salon-website-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Weather APK",
    imageUrl: "https://i.ibb.co/1Qy74BD/weather.png",
    link: "https://github.com/ThakkarRajan/Weather-App",
  },
  {
    id: 4,
    title: "NaturalWalk IPA ",
    description: "This is a brief description of Project Two.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/592b029d1b10e3b323809b40/1246d372-c979-474b-ae78-101a8b97ae3b/logosign.png?format=1500w",
    link: "https://github.com/ThakkarRajan/NaturalWalk-iOS-Application",
  },
  {
    id: 5,
    title: "News APK",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/741/741867.png",
    link: "https://github.com/ThakkarRajan/News-Application",
  },
  {
    id: 6,
    title: "My Alarm APK",
    imageUrl:
      "https://pics.craiyon.com/2023-06-16/e69950f8567b402cad26c1c1f7ebe15d.webp",
    link: "https://github.com/ThakkarRajan/MyAlarmByRajan",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="projects">
      <PageHeaderContent
        headerText="portfolio"
        icon={<GrProjects size={40} />}
      />

      <div className="projects">
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
