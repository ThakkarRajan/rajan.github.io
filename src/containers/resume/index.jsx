import React from "react";
import { IoIosPaper } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";

const Resume=()=>{
    return(
       
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="resume"
                icon={<IoIosPaper size={40} />} />
           </section> 
    )
}
export default Resume