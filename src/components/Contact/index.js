import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

import {
  ContactSection,
  ContactHeader,
  HeaderArrow,
  ContactText,
} from "./ContactElements";
const Contact = () => {
  const Mailto = () => {
    return (
      <a
        style={{
          fontSize: "1.6rem",
          textAlign: "center",
          border: "2px solid var(--light-blue-green)",
          padding: "1.8rem 3rem",
          borderRadius: "0.5rem",
          display: "block",
          width: "150px",
          margin: "0 auto",
          letterSpacing: "0.5px",
          color: "var(--light-blue-green)",
        }}
        href={`mailto:mikejoo80@gmail.com`}
        target="_blank"
        className="box-link"
      >
        Email Me
      </a>
    );
  };
  return (
    <ContactSection id="contact-section" className="content-section">
      <ContactHeader>
        <HeaderArrow className="header--arrow">
          <AiOutlineDoubleRight />
        </HeaderArrow>
        Get In Touch
      </ContactHeader>
      <ContactText>
        Thank you for visiting my site! I am currently open to full-time
        opportunities for remote, onsite or hybrid roles. Please feel free to
        contact me with any interesting roles or if you'd just like to chat!
      </ContactText>
      <Mailto />
    </ContactSection>
  );
};

export default Contact;
