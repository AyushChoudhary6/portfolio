import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-200 opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            x: [particle.initialX, particle.initialX + 100, particle.initialX - 100, particle.initialX],
            y: [particle.initialY, particle.initialY - 100, particle.initialY + 50, particle.initialY],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.2, 0.5, 0.1, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
