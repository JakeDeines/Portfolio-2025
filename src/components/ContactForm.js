import React from 'react';

function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formspree.io/f/mldgnojv" // <-- YOUR Formspree endpoint
      method="POST"
    >
      <h2>Contact Me</h2>

      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        required 
      />

      {/* For Formspree to recognize an email field, set name="_replyto" (or just "email") */}
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="_replyto" 
        required 
      />

      <label htmlFor="message">Message:</label>
      <textarea 
        id="message" 
        name="message" 
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
