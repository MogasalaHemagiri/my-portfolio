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
          I am a recent graduate in Artificial Intelligence & Data Science from JNTUA University (2021 - 2025), passionate about building AI-driven cybersecurity solutions. My expertise spans across machine learning, deep learning, cybersecurity, and full-stack development.  

I have completed internships in Cybersecurity (Palo Alto Networks) and ChatGPT/Gen AI (Blackbucks), where I worked on threat detection systems, AI automation, and security protocols.  

I am now seeking exciting opportunities as a Fresher in AI & Cybersecurity, where I can contribute my problem-solving mindset, technical expertise, and passion for innovation
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
