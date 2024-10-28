import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";

const Home = () => {
  const scrollToResume = () => {
    const resumeSection = document.getElementById("resume");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className="home">
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Rajan Thakkar
            <br />
            Application / Web Developer
          </h1>
        </div>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: "translateY(450px)" }}
          end={{ transform: "translateY(0px)" }}
        >
          <div className="home__contact-me">
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/thakkarrajanca/",
                  "_blank"
                )
              }
            >
              Contact Me
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/ThakkarRajan", "_blank")
              }
            >
              Github
            </button>
            <button onClick={scrollToResume}> Resume </button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;
