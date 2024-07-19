import React from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss'


const projects = [
    {
      id: 1,
      title: 'Weather App',
      imageUrl: 'https://private-user-images.githubusercontent.com/133991447/340939279-6a87350e-be0b-4e37-8701-77ccf623731e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE0MDk5ODQsIm5iZiI6MTcyMTQwOTY4NCwicGF0aCI6Ii8xMzM5OTE0NDcvMzQwOTM5Mjc5LTZhODczNTBlLWJlMGItNGUzNy04NzAxLTc3Y2NmNjIzNzMxZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcxOVQxNzIxMjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lNzMzNmI0ZDNjZDE3YjRhYjk5ZGVkMDI5ZmRkMTA3MDhkOTQxYWE4OTYwZWU3MmMwZTEwZjk2NDAyYjA3MWFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.bx6M18GbkC6Rm6upjOeAIvfcUtXJG84RMahBZJYDz_c',
      link: 'https://github.com/ThakkarRajan/Weather-App'
    },
    {
      id: 2,
      title: 'NaturalWalk iOS Application',
      description: 'This is a brief description of Project Two.',
      imageUrl: 'http://naturewalkproducts.com/wp-content/uploads/2016/09/Nature-Walk-logo-1170x1170.png',
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
