// components/Projects.js
import { motion } from 'framer-motion'

const projects = [
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot with natural language processing.",
    link: "https://github.com/yourusername/aichatbot"
  },
  {
    title: "CyberSec Dashboard",
    description: "A comprehensive security dashboard for real-time threat monitoring.",
    link: "https://github.com/yourusername/cybersec-dashboard"
  },
  {
    title: "ML Image Classifier",
    description: "A deep learning model deployed to classify images with high accuracy.",
    link: "https://github.com/yourusername/ml-image-classifier"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
