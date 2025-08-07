import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-[5%] bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dedicated to exceptional digital experiences
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm a passionate designer and developer with over 5 years of experience creating 
                digital products that make a difference. Currently working at leading tech companies, 
                I specialize in user experience design and front-end development.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
                <p className="text-gray-600">
                  5+ years working with startups and enterprises, helping them create 
                  products that users love and businesses need.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Focus</h3>
                <p className="text-gray-600">
                  User-centered design, responsive web applications, and creating 
                  seamless digital experiences across all platforms.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">
                UX Design
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">
                Frontend Development
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">
                Product Strategy
              </span>
            </div>
          </div>
          
          {/* Right Side - Visual Content */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Profile Image */}
              <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-2xl">🎨</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-xl">💡</span>
              </motion.div>
              
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 -right-6 w-12 h-12 bg-green-500 rounded-lg shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-lg">⚡</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
