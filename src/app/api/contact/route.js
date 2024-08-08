import connectDB from '@/app/lib/mongodb';
import Contact from '@/app/models/contact';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errList = [];
      for (let e in error.errors) {
        errList.push(error.errors[e].message);
      }
      console.log(errList);

      return NextResponse.json({
        msg: errList,
      });
    }
    return NextResponse.json(error);
  }
}
