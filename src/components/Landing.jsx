import React from 'react';
import ContactForm from './ContactForm';

function Landing() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p>Please fill out the form below</p>
      <ContactForm />
    </div>
  );
}

export default Landing;
