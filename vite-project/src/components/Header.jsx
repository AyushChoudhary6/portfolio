import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav 
        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-4 shadow-2xl shadow-gray-900/10 backdrop-saturate-180 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          borderRadius: ["50px", "45px", "50px"],
        }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          borderRadius: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{
          scale: 1.02,
          y: -2,
          borderRadius: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          transition: { 
            duration: 0.4, 
            ease: "easeOut" 
          }
        }}
      >
        <ul className="flex list-none gap-8 items-center relative z-10">
          <motion.li
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#about" 
              className="text-gray-800 font-medium hover:text-gray-900 transition-all duration-300 py-2 px-3 rounded-full relative"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <span className="relative z-10">About Me</span>
            </motion.a>
          </motion.li>
          
          <motion.li
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#projects" 
              className="text-gray-800 font-medium hover:text-gray-900 transition-all duration-300 py-2 px-3 rounded-full relative"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <span className="relative z-10">Work</span>
            </motion.a>
          </motion.li>
          
          <motion.li
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#skills" 
              className="text-gray-800 font-medium hover:text-gray-900 transition-all duration-300 py-2 px-3 rounded-full relative"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <span className="relative z-10">Tech Stack</span>
            </motion.a>
          </motion.li>
          
          <motion.li
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#contact" 
              className="text-gray-800 font-medium hover:text-gray-900 transition-all duration-300 py-2 px-3 rounded-full relative"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <span className="relative z-10">Get in touch</span>
            </motion.a>
          </motion.li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
