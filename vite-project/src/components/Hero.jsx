import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import FloatingParticles from './FloatingParticles';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen pt-24 px-[5%] max-w-4xl mx-auto text-center bg-white relative" id="hero">
      <FloatingParticles />
      <motion.div 
        className="w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          className="mb-12"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-64 h-64 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-medium shadow-xl overflow-hidden"
            variants={floatingVariants}
            animate="floating"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <span>Your Photo</span>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
          variants={textVariants}
        >
          <motion.span 
            className="block"
            variants={nameVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <TypewriterText text="Ayush Choudhary" delay={1000} speed={150} />
          </motion.span>
          <span className="block mt-2">Devops Engineer</span>
        </motion.h1>
        
       
      </motion.div>
    </section>
  );
};

export default Hero;
