import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";

import { FaAws } from "react-icons/fa";

import "./style.scss";

import { DiAndroid, DiApple } from "react-icons/di";

import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Rajan Thakkar",
  },
  {
    label: "Address",
    value: "Ontario / Canada",
  },
  {
    label: "Email",
    value: "thakkarrajanca@gmail.com",
  },
  {
    label: "Contact No",
    value: "+1 4377553112",
  },
];

const jobSummary =
  "Skilled in designing and implementing high-quality, scalable web solutions, with a proven track record of enhancing site performance, optimizing code, and improving user engagement. Adept at delivering projects on time and meeting technical specifications, with expertise in React, Node.js, and RESTful APIs. Committed to leveraging strong problem-solving abilities and technical acumen to drive impactful results within a development team.";

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
              transform: "translateX(-950px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Full Stack Developer </h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateY(950px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="personalH3Text">Personal Details </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label} </span>

                  {item.value === "thakkarrajanca@gmail.com" ? (
                    <span className="value">
                      {" "}
                      <a href="mailto:thakkarrajanca@gmail.com">
                        thakkarrajanca@gmail.com
                      </a>{" "}
                    </span>
                  ) : (
                    <span className="value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
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
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <IoLogoJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <TiHtml5 size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaAws size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
