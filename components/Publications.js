// components/Publications.js
import { motion } from "framer-motion";

const Publications = () => {
  const publications = [{
      title: "A Smart Prediction of Cardiovascular Diseases with Ensemble Classifiers",
      description: "Published Paper in AI & Healthcare Research",
      
    },
      title: "🔬 Ongoing Research in AI & Cybersecurity",
      description: "Exploring advanced techniques in AI-driven security solutions",
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
        📜 Research & Publications
      </motion.h3>

      <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-lg">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="mb-6 border-l-4 border-yellow-400 pl-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h4 className="text-xl font-semibold">{pub.title}</h4>
            <p className="text-yellow-200">{pub.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
