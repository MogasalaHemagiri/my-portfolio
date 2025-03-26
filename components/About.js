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
          className="max-w-3xl mx-auto text-lg text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m a passionate AI Developer who recently graduated with a degree in Artificial Intelligence & Data Science. 
          I am actively seeking opportunities as a fresher in AI and Cybersecurity, aiming to apply my knowledge in real-world applications.
        </motion.p>

        {/* Add All Sections in About Page */}
        <Education />
        <Experience />
        <Skills />
        <Publications />
      </div>
    </section>
  );
};

export default About;
