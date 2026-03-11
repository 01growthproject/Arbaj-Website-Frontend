import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "arbaj@email",   // EmailJS service ID
      "template_ccj32f3",  // template ID
      form.current,
      "public_key_xxxxx" // public key
    )
      .then(
        () => {
          alert("Email Sent Successfully ✅");
        },
        (error) => {
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>

      <input
        type="text"
        name="user_name"
        placeholder="Enter Name"
        required
      />

      <input
        type="email"
        name="user_email"
        placeholder="Enter Email"
        required
      />

      <textarea
        name="message"
        placeholder="Enter Message"
        required
      />

      <button type="submit">Send</button>

    </form>
  );
}

export default ContactForm;