import React, { useState } from "react";
import "./myForm.css";

export const MyForm: React.FC = () => {
  const [status, setStatus] = useState("");
  const submitForm = (ev: any) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="form-container">
      <div className="contact-message">
        <h1>Contact Me</h1>
        <p className="sub-message">
          Enter details and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="form">
        <form
          onSubmit={submitForm}
          action="https://formspree.io/mknqqege"
          method="POST"
        >
          <label>Email:</label>
          <input required type="email" name="email" />
          <div className="message-group">
            <label>Message:</label>
            <textarea required name="message" />
          </div>

          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <input type="submit" className="submit-button" value="SUBMIT" />
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    </div>
  );
};
