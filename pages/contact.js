import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="contact__submission">
      <p>Thank you for reaching out! I will get back to you soon.</p>
      <p>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="1x"
          className="skills__resume-download"
          color="#000000"
        />
        <a href="/"> Back to the site</a>
      </p>
    </div>
  );
}
