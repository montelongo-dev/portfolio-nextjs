import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from "react-markdown";
import ContactForm from "./ContactForm";

export default function Contact({ contact }) {
  const [copy, setCopy] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setCopy(contact.contact_copy);
    setEmail(contact.contact_email);
  }, []);

  const emailCheck = () => {
    if (email) {
      return (
        <a href={`mailto:${email}`}>
          <h2 className="contact__email">{email}</h2>
        </a>
      );
    }
  };

  return (
    <div id="contact" className="contact">
      <h4 className="contact__title">Contact</h4>

      <div className="contact__text-container">
        <ReactMarkdown>{copy}</ReactMarkdown>
        {/* {emailCheck()} */}
      </div>

      {/* <div className="contact__icon-container">
        <a
          href="https://www.linkedin.com/in/sam-montelongo-8139b2134/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="contact__icons"
            color="white"
          />
        </a>

        <a
          href="https://github.com/montelongo-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="contact__icons"
            color="white"
          />
        </a>
      </div> */}
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
