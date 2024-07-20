import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import emailjs from 'emailjs-com';
import './style.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        to_name : 'Rajan',
        name: '',
        email: '',
        desc: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_s4vyr0t', 'template_buinhql', formData, 'N6ozcGGLHW_J-9dw6')
    .then((response) => {
        console.log('SUCCESS!', response);
        alert('Message sent successfully!');
    }, (err) => {
        console.log('FAILED...', err);
        alert(`Failed to send message: ${err.text}`);
    });
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="contact"
                icon={<IoIosContact size={40} />}
            />
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
                        <form onSubmit={handleSubmit} className="contact__content__form__controlsWrapper">
                            <div>
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="nameLabel" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="emailLabel" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea
                                    rows={5}
                                    required
                                    name="desc"
                                    className="inputDesc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                />
                                <label htmlFor="descLabel" className="descLabel">Description</label>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;