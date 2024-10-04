import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="google-form-container">
        <iframe
          src="https://forms.gle/SxkKSNYAbdaKhUo77" // Replace with your Google Form link
          width="100%"
          height="600"
          style={{ border: 'none' }}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Contact;
