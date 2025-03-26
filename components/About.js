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
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m a passionate AI Developer with a cybersecurity background. My expertise ranges from full-stack development to building cutting-edge machine learning models. I continuously push the envelope to create applications that not only perform but inspire.
        </motion.p>

        {/* Additional Sections */}
        <Education />
        <Experience />
        <Skills />
        <Publications />
      </div>
    </section>
  );
};

export default About;
