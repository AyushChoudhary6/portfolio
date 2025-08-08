import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-[5%] bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full mb-6 shadow-lg">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                Crafting Cloud-Native Solutions That Scale Beyond Boundaries
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm a passionate DevOps Engineer and Cloud Architect who transforms complex infrastructure challenges into elegant, scalable solutions. With expertise in AWS, Kubernetes, Terraform, and modern CI/CD practices, I bridge the gap between development and operations to deliver reliable, high-performance systems.
              </p>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Performance</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Optimizing systems for speed, reliability, and cost-effectiveness at scale.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-lg">🛡️</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Security</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Building secure infrastructure with automated compliance and monitoring.
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">DevOps Tech Stack</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {/* Row 1 */}
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">☁️</span>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">🐳</span>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">🏗️</span>
                      </div>
                      
                      {/* Row 2 */}
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">📊</span>
                      </div>
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-2xl">🛡️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Visual Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="relative"
            >
              {/* Main Profile Card */}
              <div className="w-full max-w-md mx-auto">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-3 scale-105"></div>
                
                {/* Main Card */}
                <div className="relative w-full h-96 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-6 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl">👨‍💻</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Ayush Choudhary</h3>
                        <p className="text-blue-200 text-sm">DevOps Engineer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats/Metrics */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-xs text-gray-600">Learning Mode</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">100%</div>
                        <div className="text-xs text-gray-600">Passion Driven</div>
                      </div>
                    </div>
                    
                    {/* Tech Stack Icons */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="text-gray-600 text-sm font-medium">DevOps Tech Stack</span>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {/* Row 1 */}
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">☁️</span>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">🐳</span>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">⚙️</span>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">🏗️</span>
                        </div>
                        
                        {/* Row 2 */}
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">🔄</span>
                        </div>
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">📊</span>
                        </div>
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                          <span className="text-2xl">�️</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
              >
                <span className="text-white text-3xl">☁️</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl shadow-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
              >
                <span className="text-white text-2xl">⚙️</span>
              </motion.div>
              
              <motion.div 
                animate={{ x: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-xl flex items-center justify-center backdrop-blur-sm border border-white/20"
              >
                <span className="text-white text-xl">🚀</span>
              </motion.div>
              
              <motion.div 
                animate={{ x: [0, -8, 0], y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/4 -left-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20"
              >
                <span className="text-white text-lg">💡</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
