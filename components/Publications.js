// components/Publications.js
import { motion } from "framer-motion";

const Publications = () => {
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

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl font-semibold">
            📝 Cardiovascular Tissue Cancer Detection using Neural Networks
          </h4>
          <p className="text-gray-500">Ongoing Research in AI & Cybersecurity</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
