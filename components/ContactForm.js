import React from "react";

export default function ContactForm() {
  return (
    <div className="container-contact100">
      <div className="wrap-contact100">
        <form className="contact100-form validate-form">
          <div
            className="wrap-input100 validate-input"
            data-validate="Name is required"
          >
            <input
              className="input100"
              type="text"
              name="name"
              placeholder="Name"
            />
            <span className="focus-input100-1"></span>
            <span className="focus-input100-2"></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="Email"
            />
            <span className="focus-input100-1"></span>
            <span className="focus-input100-2"></span>
          </div>

          <div
            className="wrap-input100 validate-input"
            data-validate="Message is required"
          >
            <textarea
              className="input100"
              name="message"
              placeholder="Message"
            ></textarea>
            <span className="focus-input100-1"></span>
            <span className="focus-input100-2"></span>
          </div>

          <div className="container-contact100-form-btn">
            <button className="contact100-form-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
