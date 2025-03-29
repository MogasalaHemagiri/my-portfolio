// components/Experience.js
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      role: "Cybersecurity Intern",
      company: "Palo Alto Networks",
      year: "Jan 2024 - Apr 2024",
    },
    {
      role: "ChatGPT/Gen AI Intern",
      company: "Blackbucks ( Short term ) ",
      year: "Apr 2024 - Jul 2024",
    },
    {
      role: "AI-ML Intern",
      company: "Blackbucks ( Long term)",
      year: "Jan 2025 - june 2025",
    },
  ];

  return (
    <section className="py-12">
      <motion.h3
        className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        💼 Experience
      </motion.h3>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h4 className="text-xl font-semibold">{exp.role}</h4>
            <p className="text-gray-500">{exp.company}</p>
            <span className="text-blue-600 font-medium">{exp.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
