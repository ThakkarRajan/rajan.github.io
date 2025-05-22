import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles.css";
import Starfield from "./Starfield";

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
          showSnackbar("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          showSnackbar("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Starfield />

      <section id="contact" className="contact-section">
        <h2 className="section-title">📬 Let’s Connect</h2>
        <p className="contact-intro">
          I’d love to hear from you! Whether it’s about tech, jobs, or memes 😄
        </p>

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
            Send Message 🚀
          </button>
        </form>

        <p className="contact-note">
          Prefer socials? Scroll up and click GitHub or LinkedIn!
        </p>

        {showToast && <div className="snackbar">{toastMessage}</div>}
      </section>
    </>
  );
};

export default ContactPage;
