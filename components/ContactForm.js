import React from "react";

export default function ContactForm() {
  return (
    <div className="container-contact">
      <div className="wrap-contact">
        <form
          action="/contact"
          className="contact-form validate-form"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <div class="hidden">
            <label>
              This field: <input name="bot-field" />
            </label>
          </div>
          <input required type="hidden" name="form-name" value="contact" />
          <div
            className="wrap-input validate-input"
            data-validate="Name is required"
          >
            <input
              required
              className="input"
              type="text"
              name="name"
              placeholder="Name"
            />
            <span className="focus-input-1"></span>
            <span className="focus-input-2"></span>
          </div>

          <div
            className="wrap-input validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              required
              className="input"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span className="focus-input-1"></span>
            <span className="focus-input-2"></span>
          </div>

          <div
            className="wrap-input validate-input"
            data-validate="Message is required"
          >
            <textarea
              required
              className="input"
              name="message"
              placeholder="Message"
            ></textarea>
            <span className="focus-input-1"></span>
            <span className="focus-input-2"></span>
          </div>

          <div className="container-contact-form-btn">
            <button className="contact-form-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
