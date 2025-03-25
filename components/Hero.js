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
        <a href="https://linkedin.com/in/mr-hemagiri" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://t.me/networkdefender" target="_blank" rel="noopener noreferrer">
          <img src="/icons/telegram.svg" alt="Telegram" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com/captain_anand0.7" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://orcid.org/yourid" target="_blank" rel="noopener noreferrer">
          <img src="/icons/orcid.svg" alt="ORCID" className="w-8 h-8" />
        </a>
      </div>

      {/* Education Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-lg">
          B.Tech Artificial Intelligence & Data Science - 
          <a href="https://www.jntua.ac.in/" className="text-blue-600 font-bold hover:underline" target="_blank">
            JNTUA University (2021 - 2025)
          </a>
        </p>
      </div>

      {/* Experience Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p className="text-lg">
          Cybersecurity Intern - <span className="font-bold">Palo Alto Networks</span> (Jan 2024 - Apr 2024)
        </p>
        <p className="text-lg">
          ChatGPT/Gen AI Intern - <span className="font-bold">AI Research</span> (Apr 2024 - Jul 2024)
        </p>
      </div>

      {/* Research & Publications */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Research & Publications</h2>
        <p className="text-lg">
          Published Paper: <span className="font-bold">Cardiovascular Tissue Cancer Detection using Neural Networks</span>
        </p>
        <p className="text-lg">Ongoing Research in AI & Cybersecurity</p>
      </div>

      {/* Skills Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p className="text-lg font-bold">🧠 AI & Cybersecurity</p>
        <p className="text-lg">
          🚀 Python | Django | Next.js | PyTorch | TensorFlow | HuggingFace | R | Solidity | JavaScript
        </p>
        <p className="text-lg">
          💡 Neural Networks | Data Structures | Full-Stack Development | Cloud (Azure, AWS)
        </p>
        <p className="text-lg">🛠 Operating Systems: Windows | Linux</p>
        <p className="text-lg">🗣 Communication | Critical Thinking | Analytical Thinking | Team Management</p>
      </div>
    </section>
  );
};

export default Hero;
