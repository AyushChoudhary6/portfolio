import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 px-[5%] bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Enhanced Text Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Enhanced Badge */}
              <motion.span 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white text-sm font-semibold rounded-full mb-8 shadow-2xl border border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <span className="mr-2">✨</span>
                About Me
                <span className="ml-2">🚀</span>
              </motion.span>
              
              {/* Enhanced Heading */}
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Architecting
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Tomorrow's
                </span>
                <span className="block">Infrastructure</span>
              </motion.h2>
              
              {/* Enhanced Description */}
              <motion.p 
                className="text-xl text-slate-600 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Passionate DevOps Engineer specializing in cloud-native architecture and infrastructure automation. 
                I transform complex challenges into elegant, scalable solutions that empower teams and accelerate innovation.
              </motion.p>
            </motion.div>
            
            {/* Enhanced Cards Section */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Performance & Security Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white text-xl">⚡</span>
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900">Performance Excellence</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Optimizing cloud infrastructure for lightning-fast performance, maximum reliability, and cost-effective scaling.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ rotate: -360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white text-xl">🛡️</span>
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900">Security First</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Building fortress-grade security with automated compliance, monitoring, and zero-trust architecture.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced Tech Stack Section */}
              <motion.div 
                className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-slate-200/50 shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-white text-2xl">🚀</span>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">DevOps Arsenal</h3>
                      <p className="text-slate-600">Modern tools for modern challenges</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {/* Enhanced DevOps Icons */}
                    {[
                      { icon: '☁️', bg: 'from-orange-400 to-red-500', label: 'Cloud' },
                      { icon: '🐳', bg: 'from-blue-400 to-cyan-500', label: 'Docker' },
                      { icon: '⚙️', bg: 'from-purple-400 to-indigo-500', label: 'Kubernetes' },
                      { icon: '🏗️', bg: 'from-green-400 to-emerald-500', label: 'Terraform' },
                      { icon: '⚡', bg: 'from-yellow-400 to-orange-500', label: 'CI/CD' },
                      { icon: '🔄', bg: 'from-pink-400 to-rose-500', label: 'GitOps' },
                      { icon: '📊', bg: 'from-indigo-400 to-purple-500', label: 'Monitoring' },
                      { icon: '🛡️', bg: 'from-red-400 to-pink-500', label: 'Security' }
                    ].map((tech, index) => (
                      <motion.div
                        key={index}
                        className={`group relative w-16 h-16 bg-gradient-to-br ${tech.bg} rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-white text-xl">{tech.icon}</span>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {tech.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Side - Simple Text Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Hi, I'm Ayush Choudhary
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A passionate DevOps Engineer dedicated to building robust, scalable infrastructure solutions. 
                  I specialize in cloud technologies, automation, and creating seamless CI/CD pipelines.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  What I Do
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Cloud Infrastructure Design & Implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Container Orchestration with Kubernetes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Infrastructure as Code (Terraform)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    CI/CD Pipeline Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Monitoring & Security Implementation
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  My Approach
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  My goal is to create efficient, secure, and scalable solutions that drive innovation 
                  and empower development teams to focus on what they do best.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default About;
