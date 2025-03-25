// components/Projects.js
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Blockchain Insider Bot",
    description: "A bot that provides real-time insights and analytics on blockchain trends and news.",
    link: "https://github.com/MogasalaHemagiri/blockchain-insider-bot"
  },
  {
    title: "Terramind",
    description: "An intelligent platform integrating AI with blockchain for advanced data analytics.",
    link: "https://github.com/MogasalaHemagiri/Terramind"
  },
  {
    title: "MixedLLM",
    description: "A framework that leverages multiple language models for enhanced AI performance.",
    link: "https://github.com/MogasalaHemagiri/Mixedllm"
  },
  {
    title: "AI Code Review System",
    description: "An automated code review system powered by AI to enhance code quality and efficiency.",
    link: "https://github.com/MogasalaHemagiri/ai-code-review-system"
  },
  {
    title: "PyTorch YOLO v3",
    description: "A real-time object detection implementation using YOLO v3 architecture in PyTorch.",
    link: "https://github.com/MogasalaHemagiri/pytorch-yolo-v3"
  },
  {
    title: "Health Chatbot",
    description: "An AI-powered chatbot offering health advice and information to users.",
    link: "https://github.com/MogasalaHemagiri/Health-chatbot"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-green-100 dark:bg-green-900">
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
              className="relative block bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                {/* Animated pulsing circle behind the title */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-300 opacity-50"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <h3 className="relative text-2xl font-semibold mb-2">{project.title}</h3>
              </div>
              <p className="relative">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
