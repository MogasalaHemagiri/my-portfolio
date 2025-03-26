import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const taglines = [
  "I'm Hemagiri Naidu",
  "I_Love_Coding_In.py",
  "I Like Learning AI",
  "I Like Cybersecurity",
  "Building Next-Gen AGI",
  "Red Team & AI Security",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="h-screen flex flex-col justify-center items-center text-white relative"
      style={{
        backgroundImage: "url('/icons/ai-developer-bg.jpg')", 

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Darker Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Animated Changing Taglines */}
      <motion.h1 
        className="text-5xl font-bold text-center relative z-10 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {taglines[index]}
      </motion.h1>

      {/* Social Media Icons */}
      <div className="flex gap-4 mt-4 relative z-10">
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
        
      </div>

      {/* Scroll Down Button */}
      <a href="#about" className="mt-6 text-lg font-semibold text-yellow-400 animate-bounce relative z-10">
        ▼ Scroll Down ▼
      </a>
    </section>
  );
};

export default Hero;
