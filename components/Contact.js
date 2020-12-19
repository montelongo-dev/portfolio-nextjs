import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContactForm from "./ContactForm";

export default function Contact({ contact }) {
  const [copy, setCopy] = useState("");

  useEffect(() => {
    setCopy(contact.contact_copy);
  }, []);

  return (
    <div id="contact" className="contact">
      <h4 className="contact__title">Contact</h4>

      <div className="contact__text-container">
        <ReactMarkdown>{copy}</ReactMarkdown>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}
