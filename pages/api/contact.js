// pages/api/contact.js
import { dbConnect } from '../../lib/dbConnect';
import Contact from '../../models/Contact';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect();

    try {
      const { name, email, reason } = req.body;

      // Save to MongoDB
      const newContact = new Contact({ name, email, reason });
      await newContact.save();

      // Send Email Notification
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your email
          pass: process.env.EMAIL_PASS  // Your email password or app password
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send email to yourself
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}`
      });

      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting form', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
