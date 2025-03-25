import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const textVariants = [
  "I'm Hemagiri Naidu",
  "I_Love_Coding_In.py",
  "I Like Learning AI",
  "I Like Cybersecurity",
  "Building Next-Gen AGI",
  "Red Team & AI Security",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-green-100 text-gray-900">
      {/* Animated Name + Taglines */}
      <motion.h1
        className="text-5xl font-bold font-inter text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {textVariants[textIndex]}
      </motion.h1>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/MogasalaHemagiri" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://orcid.org/yourid" target="_blank" rel="noopener noreferrer">
          <img src="/icons/orcid.svg" alt="ORCID" className="w-8 h-8" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 flex gap-6">
        <a href="/education" className="text-lg font-semibold text-blue-600 hover:underline">Education</a>
        <a href="/experience" className="text-lg font-semibold text-blue-600 hover:underline">Experience</a>
        <a href="/skills" className="text-lg font-semibold text-blue-600 hover:underline">Skills</a>
        <a href="/publications" className="text-lg font-semibold text-blue-600 hover:underline">Research</a>
      </div>
    </section>
  );
};

export default Hero;
