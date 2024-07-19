import React from "react";
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'

const Home = () => {
    const navigate = useNavigate()
    const handleNavToContactMe = () => {
        navigate('/contact')

    }
    const handleNavToResume = () => {
        navigate('/resume')

    }
    

    return (

        <section id="home" className="home">
            <div className="home__text-wrapper" >
                <h1>
                    Hello, I'm Rajan Thakkar
                    <br />
                    Application Developer
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateY(450px)'

            }}
            end={{
                transform : 'translateY(0px)'

            }}
            >
            <div className="home__contact-me">
            <button onClick={() => window.open('https://www.linkedin.com/in/thakkarrajanca/', '_blank')}>
    Contact Me
</button>   
                <button onClick={handleNavToResume}>
                    Resume
                </button>
            </div>
            </Animate>
        </section>
    )
}
export default Home