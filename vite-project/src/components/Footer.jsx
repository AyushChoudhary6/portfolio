import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white text-gray-900 py-12 px-6 border-t border-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-2">Ayush Choudhary</h3>
            <p className="text-gray-600">Devops Engineer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mt-4 md:mt-0"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/ayush-choudhary-29aa01325/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src="/icons8-linkedin-48.png" 
                alt="LinkedIn" 
                className="w-8 h-8 filter hover:opacity-80 transition-all duration-300"
              />
            </motion.a>
            
            <motion.a 
              href="https://github.com/AyushChoudhary6" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src="/icons8-github-50.png" 
                alt="GitHub" 
                className="w-8 h-8 filter hover:opacity-80 transition-all duration-300" 
              />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-200 mt-8 pt-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ayush Choudhary. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
