// components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Your message has been sent successfully!');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Info */}
        <div className="text-center mb-10">
          <p className="text-lg font-semibold">📞 Phone: +91 98765 43210</p>
          <p className="text-lg font-semibold">📧 Email: your.email@example.com</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
              placeholder="Write your message here..."
              rows="4"
            ></textarea>
          </div>

          {/* Upload CV */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Upload CV</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border rounded-lg" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Download CV */}
        <div className="text-center mt-8">
          <a
            href="/cv.pdf"
            download="My_CV.pdf"
            className="inline-block py-3 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
          >
            📄 Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
