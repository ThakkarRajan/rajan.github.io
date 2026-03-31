import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles.css";
import Starfield from "./Starfield";

const SITE_ORIGIN = "https://rajan.codes";
const profileImagePath = "/images/rajan-thakkar-professional-headshot.jpg";
const profileImageAbsoluteUrl = `${SITE_ORIGIN}${process.env.PUBLIC_URL}${profileImagePath}`;

const ContactPage = () => {
  const form = useRef();
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showSnackbar = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zzbkolu",
        "template_buinhql",
        form.current,
        "N6ozcGGLHW_J-9dw6"
      )
      .then(
        () => {
          showSnackbar("Message sent successfully.");
          form.current.reset();
        },
        () => {
          showSnackbar("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Starfield />

      <section id="contact" className="contact-section" itemScope itemType="https://schema.org/ContactPage">
        <div className="contact-header">
          {/* <div className="contact-profile-ring" aria-hidden="true">
            <img
              className="contact-profile-img"
              src={profileImageSrc}
              alt="Rajan Thakkar — full stack developer, Toronto, Canada — professional headshot"
              title="Rajan Thakkar, full stack developer"
              width={192}
              height={192}
              decoding="async"
            />
          </div> */}
          <div className="contact-header-text">
            <h2 className="section-title" itemProp="name">
              Get in touch
            </h2>
            <p className="contact-intro" itemProp="description">
              I welcome messages about opportunities, collaboration, and technical projects.
            </p>
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Person" style={{display: 'none'}}>
          <meta itemProp="name" content="Rajan Thakkar" />
          <meta itemProp="image" content={profileImageAbsoluteUrl} />
          <meta itemProp="email" content="thakkarrajanca@gmail.com" />
          <meta itemProp="telephone" content="+1-437-755-3112" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressLocality" content="Toronto" />
            <meta itemProp="addressRegion" content="Ontario" />
            <meta itemProp="addressCountry" content="CA" />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send message
          </button>
        </form>

        <div className="contact-info" itemScope itemType="https://schema.org/ContactPoint">
          <p className="contact-note">
            <strong>Direct Contact:</strong><br />
            <a href="mailto:thakkarrajanca@gmail.com" itemProp="email">thakkarrajanca@gmail.com</a><br />
            <a href="tel:+14377553112" itemProp="telephone">+1 (437) 755-3112</a>
          </p>
          <p className="contact-note">
            Prefer socials? Scroll up and click GitHub or LinkedIn!
          </p>
        </div>

        {showToast && <div className="snackbar">{toastMessage}</div>}
      </section>
    </>
  );
};

export default ContactPage;
