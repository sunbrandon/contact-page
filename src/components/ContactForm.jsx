'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);

    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    console.log(error);

    if (success) {
      setName('');
      setEmail('');
      setMessage('');
      toast({
        description: 'Your message has been sent',
      });
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-5 border-t py-4">
      <div className="">
        <h2>Full Name</h2>
        <Input
          type="text"
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="">
        <h2>Email</h2>
        <Input
          type="email"
          placeholder="johndoe@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="">
        <h2>Message</h2>
        <Input
          type="description"
          placeholder="Type your message here"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-500" onClick={handleSubmit}>
        Submit
      </Button>
      <div className="flex flex-col rounded-lg bg-slate-100">
        {error &&
          error.map((e) => (
            <div
              key={''}
              className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2 text-sm`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
