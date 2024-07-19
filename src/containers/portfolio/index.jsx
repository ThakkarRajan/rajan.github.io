import React from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss'


const projects = [
    {
      id: 1,
      title: 'Weather App',
      imageUrl: 'https://img.freepik.com/premium-vector/weather-cloud-sun-rain-lightning-logo-design-symbol-icon-template_23729-1780.jpg?w=740',
      link: 'https://github.com/ThakkarRajan/Weather-App'
    },
    {
      id: 2,
      title: 'NaturalWalk iOS Application',
      description: 'This is a brief description of Project Two.',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/592b029d1b10e3b323809b40/1246d372-c979-474b-ae78-101a8b97ae3b/logosign.png?format=1500w',
      link: 'https://github.com/ThakkarRajan/NaturalWalk-iOS-Application'
    },
    {
      id: 3,
      title: 'News App',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/741/741867.png',
      link: 'https://github.com/ThakkarRajan/News-Application'
    }
  ];

  
const Portfolio=()=>{
    return(
        
        <section id="portfolio" className="projects">
        <PageHeaderContent
            headerText="portfolio"
            icon={<GrProjects size={40} />} />

       
        <div className="projects">
        
        <div className="projects-container">
          {projects.map(project => (
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
  

    )
}

export default Portfolio;
