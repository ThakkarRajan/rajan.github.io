import React from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss'


const projects = [
    {
      id: 1,
      title: 'Weather App',
      imageUrl: 'https://github-production-user-asset-6210df.s3.amazonaws.com/133991447/340939279-6a87350e-be0b-4e37-8701-77ccf623731e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240719%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240719T184255Z&X-Amz-Expires=300&X-Amz-Signature=2f8829671364d792557ee29a551a141f8f9b3977d34cc1c2bd868a21a49d1437&X-Amz-SignedHeaders=host&actor_id=133991447&key_id=0&repo_id=816973334',
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
