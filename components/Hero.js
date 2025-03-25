// components/Hero.js
import { motion } from 'framer-motion'
import { FaLinkedin, FaTelegram, FaInstagram, FaOrcid, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-green-100 dark:bg-green-900 flex flex-col justify-center items-center p-8"
    >
      <div className="text-center max-w-3xl">
        {/* Name & Social Media Icons */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Name
        </motion.h1>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
          </a>
          <a
            href="https://t.me/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-3xl text-blue-400 hover:text-blue-600" />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
          </a>
          <a
            href="https://orcid.org/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaOrcid className="text-3xl text-green-600 hover:text-green-800" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-gray-800 hover:text-gray-900" />
          </a>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-700">Education</h2>
          <p className="text-xl text-gray-600 mt-2">
            BTech in Artificial Intelligence and Data Science <br />
            <a
              href="https://www.jntuace.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              JNTUA University Affiliated College (2021 - 2025)
            </a>
          </p>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-10 text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-700">Experience</h2>
          <ul className="mt-4 space-y-2 text-xl text-gray-600">
            <li>
              <strong>Cybersecurity Intern</strong> at{" "}
              <a
                href="https://www.paloaltonetworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Palo Alto Networks
              </a>{" "}
              (January 2024 - April 2024)
            </li>
            <li>
              <strong>ChatGPT/Gen AI Intern</strong> (April 2024 - July 2024)
            </li>
            <li>
              <strong>Paper Publication:</strong> "Cardiovascular Tissue Cancer
              Detection using Neural Networks"
            </li>
            <li>
              <strong>Ongoing Research</strong>
            </li>
          </ul>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-10 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-700">Skills</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-600">
            <div>AI and Cybersecurity</div>
            <div>Python</div>
            <div>Django</div>
            <div>NextJS</div>
            <div>PyTorch</div>
            <div>TensorFlow</div>
            <div>Huggingface</div>
            <div>R</div>
            <div>Solidity</div>
            <div>JavaScript</div>
            <div>Neural Networks</div>
            <div>Data Structures</div>
            <div>Full-Stack</div>
            <div>Cloud (Azure, AWS)</div>
            <div>Communication</div>
            <div>Critical Thinking</div>
            <div>Analytical Thinking</div>
            <div>Team Management</div>
            <div>OS: Windows, Linux</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
