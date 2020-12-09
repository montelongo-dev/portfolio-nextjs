import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h4 className="contact__title">Contact</h4>

      <div className="contact__text-container">
        <h2 className="contact__h2">
          If you would like to connect with me or you are interested in hearing
          more about my background, send me an email and I'll get back to you.
        </h2>

        <a href="mailto:sam@montelongo.dev">
          <h2 className="contact__email">sam@montelongo.dev</h2>
        </a>
      </div>

      <div className="contact__icon-container">
        <a
          href="https://www.linkedin.com/in/sam-montelongo-8139b2134/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xs"
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
            size="xs"
            className="contact__icons"
            color="white"
          />
        </a>
        <a className="list-group-item" href="#">
          <i className="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp; Home
        </a>
      </div>
    </div>
  );
}
