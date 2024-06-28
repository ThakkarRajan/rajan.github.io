import React from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss'
const Contact = () => {
    return (

        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="contact"
                icon={<IoIosContact size={40} />} />

    <div className="contact__content">
        <Animate
        play
        duration={1.5}
        delay={0}
        start={{
            transform: "translateX(-200px)"
        }}
        end={{
            transform: "translateX(0px)"
        }}
        
        >
            <h3 className="contact__content__header-text">
                Let's Communicate
            </h3>

        </Animate>
        <Animate
        play
        duration={1.5}
        delay={0}
        start={{
            transform: "translateX(200px)"
        }}
        end={{
            transform: "translateX(0px)"
        }}
        
        >
<div className="contact__content__form">
<div className="contact__content__form__controlsWrapper">
<div >
<input required name ="name" className="inputName" type={'text'}/>
<label htmlFor="nameLabel" className="nameLabel"> Name</label>

</div>

<div >
<input required name ="email" className="inputEmail" type={'text'}/>
<label htmlFor="emaiLabel" className="emailLabel">Email</label>

</div>

<div >
<textarea rows={5} required name ="desc" className="inputDesc" type={'text'}/>
<label htmlFor="descLabel" className="descLabel">Description</label>

</div>
</div>
    <button> Submit </button>
</div>

            </Animate>
        
        </div>                
        </section>
    )
}
export default Contact