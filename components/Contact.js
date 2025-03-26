import { useState } from "react";
import { FaDownload, FaEye, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setMessage(data.message);
    setFormData({ name: "", email: "", reason: "" }); // Clear form after submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          📞 Get in Touch
        </h2>

        {/* Contact Details */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feel free to reach out to me for AI & Cybersecurity opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-4 py-2 rounded-lg">
              <FaPhone className="text-green-500" />
              <span className="font-medium text-gray-800 dark:text-gray-300">
                +91 8555034813
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-4 py-2 rounded-lg">
              <FaEnvelope className="text-blue-500" />
              <span className="font-medium text-gray-800 dark:text-gray-300">
                hemagiri1394.in@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">
              Reason for Contact
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your message..."
              rows="4"
              required
            ></textarea>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition duration-300">
            Send Message
          </button>
        </form>

        {/* Display Success or Error Message */}
        {message && (
          <p className="text-center text-green-500 mt-4 font-semibold">{message}</p>
        )}

        {/* Resume Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📜 My Resume
          </h2>

          <div className="flex justify-center gap-4">
            {/* View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              <FaEye /> View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Your_Name_CV.pdf"
              className="flex items-center gap-2 py-3 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
