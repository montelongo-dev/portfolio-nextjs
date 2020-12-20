import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContactForm from "./ContactForm";

export default function Contact({ data }) {
  const [contact, setContact] = useState("");

  useEffect(() => {
    setContact(data[0].contact);
  }, []);

  return (
    <div id="contact" className="contact">
      <h4 className="contact__title">Contact</h4>

      <div className="contact__text-container">
        <ReactMarkdown>{contact ? contact : ""}</ReactMarkdown>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}
