import React from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";

const Contact = () => {
    return (
   
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="contact"
                icon={<IoIosContact size={40} />} />
           </section>         
    )
}
            export default Contact