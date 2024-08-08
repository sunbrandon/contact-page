'use client';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function ContactForm() {
  return (
    <div className="mt-4 flex flex-col gap-5 border-t py-4">
      <div className="">
        <h2>Full Name</h2>
        <Input type="text" placeholder="John Doe" />
      </div>
      <div className="">
        <h2>Email</h2>
        <Input type="email" placeholder="johndoe@email.com" />
      </div>
      <div className="">
        <h2>Message</h2>
        <Input type="description" placeholder="Type your message here" />
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-500">Submit</Button>
    </div>
  );
}
