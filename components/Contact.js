import { FaDownload, FaEye, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
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

        {/* Resume Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📜 My Resume
          </h2>

          <div className="flex justify-center gap-4">
            {/* View Resume Button */}
            <a
              href="https://drive.google.com/file/d/1-FRR1mCjCRgRZBuEzTFVNANJHpwqNGyu/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              <FaEye /> View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1-FRR1mCjCRgRZBuEzTFVNANJHpwqNGyu"
              download
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
