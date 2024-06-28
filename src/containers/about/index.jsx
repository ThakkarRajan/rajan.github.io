import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss'

import { DiAndroid, DiApple } from 'react-icons/di'

import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetails = [
    {
        label: "Name",
        value: 'Rajan Thakkar'
    },
    {
        label: "Address",
        value: 'Ontario / Canada'
    },
    {
        label: "Email",
        value: 'thakkarrajanca@gmail.com'
        
    },
    {
        label: "Contact No",
        value: '+1 4377553112'
    },


]

const jobSummary = 'Ambitious Application Developer seeking to leverage diverse technical skills and educational background in mobile development, big data, and AI/ML to create innovative software solutions. Aiming to contribute expertise in full-stack development, problem-solving, and emerging technologies while continuously expanding knowledge in a dynamic professional environment.'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(-950px)'

                        }}
                        end={{
                            transform: 'translateX(0px)'

                        }}
                    >

                        <h3>Application Developer </h3>
                        <p>{jobSummary}</p>

                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateY(950px)'

                        }}
                        end={{
                            transform: 'translateY(0px)'

                        }}
                    >
                        <h3 className="personalH3Text">Personal Details </h3>
                        <ul>{
                            personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label} </span>
                                    
  
{item.value === "thakkarrajanca@gmail.com" ? (
  <span className="value"> <a href="mailto:thakkarrajanca@gmail.com">thakkarrajanca@gmail.com</a> </span>
) : (
  <span className="value">{item.value}</span>
)}
                                  

                                </li>
                            ))
                        }
                        </ul>

                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={0}
                        start={{
                            transform: 'translateX(600px)'

                        }}
                        end={{
                            transform: 'translateX(0px)'

                        }}
                    >
                    
                <div className="about__content__servicesWrapper__innerContent">
                    
                    <div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)" />

                    </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />

                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />

                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                </div>
            </div >

        </section >
    )
}
export default About