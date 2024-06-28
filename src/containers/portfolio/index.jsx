import React from "react";
import { GrProjects } from "react-icons/gr";
import PageHeaderContent from "../../components/pageHeaderContent";

const Portfolio=()=>{
    return(

        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="portfolio"
                icon={<GrProjects size={40} />} />
           </section> 
    )
}
export default Portfolio