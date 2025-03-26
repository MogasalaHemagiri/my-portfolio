// components/Skills.js
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "🧠 AI & Cybersecurity",
    "💡 Python | Django | Next.js | PyTorch | TensorFlow | HuggingFace | R | Solidity | JavaScript",
    "🛠 Cloud (Azure, AWS) | Neural Networks | Data Structures",
    "🖥 OS: Windows | Linux",
    "🗣 Soft Skills: Communication | Critical Thinking | Team Management",
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
        🚀 Skills
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
