// components/Hero.js
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center p-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm [Your Name]
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          AI Developer | Cyber Security Expert | Full-Stack Innovator
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#projects" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200 transition">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
