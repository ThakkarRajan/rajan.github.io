import React from "react";
import { IoIosPaper } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import ResumeLink from "../../utils.js/Resume";
import './style.scss'

const Resume = () => {
    
    return (

        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="resume"
                icon={<IoIosPaper size={40} />} />

            <div className="resume__content">
                <h1>Welcome to my portfolio</h1>
                <ResumeLink  className="resume__content__link"/>
            </div>
        </section>
    )
}
export default Resume