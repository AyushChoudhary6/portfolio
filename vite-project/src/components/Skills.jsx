import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [isInstalling, setIsInstalling] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [highlightedSkill, setHighlightedSkill] = useState('');

  const skills = [
    'terraform', 'docker', 'jenkins', 'github', 
    'aws', 'react', 'kubernetes', 'ansible'
  ];

  const installLines = [
    { 
      text: "Reading package lists... Done", 
      color: "text-white", 
      delay: 800,
      type: "system" 
    },
    { 
      text: "Building dependency tree... Done", 
      color: "text-white", 
      delay: 600,
      type: "system" 
    },
    { 
      text: "Reading state information... Done", 
      color: "text-white", 
      delay: 700,
      type: "system" 
    },
    { 
      text: "The following NEW packages will be installed:", 
      color: "text-blue-400", 
      delay: 800,
      type: "info" 
    },
    { 
      text: skills.join(' '), 
      color: "text-cyan-300", 
      delay: 1200,
      type: "packages" 
    },
    { 
      text: "0 upgraded, 8 newly installed, 0 to remove and 0 not upgraded.", 
      color: "text-green-400", 
      delay: 600,
      type: "success" 
    },
    { 
      text: "Need to get 123 MB of archives.", 
      color: "text-yellow-400", 
      delay: 400,
      type: "warning" 
    },
    { 
      text: "After this operation, 420 MB of additional disk space will be used.", 
      color: "text-yellow-400", 
      delay: 500,
      type: "warning" 
    },
    { 
      text: "", 
      color: "text-white", 
      delay: 300,
      type: "spacer" 
    },
    ...skills.map((skill, index) => ({
      text: `Get:${index + 1} https://packages.ayush.dev/ ${skill}`,
      color: "text-green-400",
      delay: 250 + Math.random() * 200,
      type: "download",
      skill: skill
    })),
    { 
      text: "", 
      color: "text-white", 
      delay: 400,
      type: "spacer" 
    },
    { 
      text: "Setting up packages...", 
      color: "text-blue-400", 
      delay: 1000,
      type: "setup" 
    },
    { 
      text: "Processing triggers for ayush-choudhary-skills (1.0.0)...", 
      color: "text-white", 
      delay: 800,
      type: "system" 
    },
    { 
      text: "ayush-choudhary-skills successfully installed! 🎉", 
      color: "text-green-400", 
      delay: 1200,
      type: "complete" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isInstalling) {
      handleInstall();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isInstalling]);

  const handleInstall = () => {
    setIsInstalling(true);
    setCurrentLine(0);
    animateInstallation();
  };

  const animateInstallation = () => {
    let lineIndex = 0;
    const showNextLine = () => {
      if (lineIndex < installLines.length) {
        const currentLineData = installLines[lineIndex];
        
        // Highlight skill if it's a download line
        if (currentLineData.type === 'download' && currentLineData.skill) {
          setHighlightedSkill(currentLineData.skill);
          setTimeout(() => setHighlightedSkill(''), 1000);
        }
        
        setCurrentLine(lineIndex + 1);
        lineIndex++;
        setTimeout(showNextLine, currentLineData.delay || 500);
      }
    };
    setTimeout(showNextLine, 500);
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-white relative flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Terminal Window */}
        <motion.div
          className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono tracking-wide">
              ayush@portfolio: ~/skills
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="bg-black p-6 font-mono text-sm min-h-[600px] max-h-[80vh] overflow-hidden">
            {/* Welcome Message */}
            <motion.div
              className="text-green-400 mb-6 space-y-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-base">Skills Installation Terminal</div>
              <div className="text-gray-500 text-xs">Press Enter to install Ayush's skills package</div>
            </motion.div>

            {/* Command Prompt */}
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="text-green-400 mr-3 font-bold">ayush@dev:~$</span>
              <span className="text-white">sudo apt install ayush-choudhary-skills</span>
              <AnimatePresence>
                {!isInstalling && showCursor && (
                  <motion.span 
                    className="ml-1 bg-green-400 text-black px-1 inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    █
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Installation Output */}
            <AnimatePresence>
              {isInstalling && (
                <div className="space-y-1">
                  {installLines.slice(0, currentLine).map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`${line.color} leading-relaxed`}
                    >
                      {line.type === 'download' ? (
                        <div className="flex items-center">
                          <span>{line.text}</span>
                          <motion.span
                            className="ml-2 text-green-400"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                          >
                            [✓]
                          </motion.span>
                          {line.skill === highlightedSkill && (
                            <motion.div
                              className="ml-2 px-2 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded text-cyan-300 text-xs"
                              initial={{ opacity: 0, scale: 0.8, x: -10 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                              {line.skill.toUpperCase()}
                            </motion.div>
                          )}
                        </div>
                      ) : line.type === 'packages' ? (
                        <div className="pl-4">
                          {skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className={`mr-2 ${
                                skill === highlightedSkill 
                                  ? 'text-cyan-300 font-bold bg-cyan-500/20 px-1 rounded shadow-lg shadow-cyan-500/25' 
                                  : 'text-cyan-300'
                              }`}
                              initial={{ opacity: 0.7 }}
                              animate={{ 
                                opacity: skill === highlightedSkill ? 1 : 0.7,
                                scale: skill === highlightedSkill ? 1.05 : 1
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      ) : line.type === 'complete' ? (
                        <motion.div
                          className={line.color}
                          animate={{ 
                            textShadow: ['0 0 0px #10b981', '0 0 10px #10b981', '0 0 0px #10b981']
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {line.text}
                        </motion.div>
                      ) : (
                        <div>{line.text}</div>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Live cursor during installation */}
                  {currentLine < installLines.length && (
                    <motion.div className="flex items-center">
                      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>
                        <span className="bg-green-400 text-black px-1 animate-pulse">█</span>
                      </span>
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>

            {/* Completion Status */}
            {currentLine >= installLines.length && isInstalling && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 p-4 border border-green-500/50 rounded-md bg-green-950/30"
              >
                <div className="text-green-400 font-bold text-base mb-2">
                  ✨ Installation Complete!
                </div>
                <div className="text-gray-300 text-xs space-y-1">
                  <div>All 8 skills have been successfully installed.</div>
                </div>
              </motion.div>
            )}

            {/* Final prompt */}
            {currentLine >= installLines.length && isInstalling && (
              <motion.div 
                className="flex items-center mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-green-400 mr-3 font-bold">ayush@dev:~$</span>
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  <span className="bg-green-400 text-black px-1">█</span>
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="text-center mt-6 text-gray-600 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="hidden md:block">
            Press <kbd className="bg-gray-700 text-white px-3 py-2 rounded text-sm font-mono">Enter</kbd> to start installation
          </div>
          <div className="md:hidden">Tap anywhere on terminal to start installation</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
