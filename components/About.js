// components/About.js
import { motion } from "framer-motion";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Publications from "./Publications";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg text-center text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m a passionate **AI Developer** with a **cybersecurity background**.  
          My expertise ranges from **full-stack development** to **cutting-edge AI research**.  
          I continuously push the envelope to create **high-performance** and **inspiring applications**.
        </motion.p>

        {/* Education Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Publications Section */}
        <Publications />
      </div>
    </section>
  );
};

export default About;
