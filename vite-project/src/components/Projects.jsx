import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectFolder = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-all duration-200 group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg border border-gray-600 z-10 whitespace-nowrap"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </motion.div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 text-blue-400">
            <svg fill="currentColor" viewBox="0 0 16 16">
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5A1 1 0 0 1 4.5 1.5h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/>
            </svg>
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors"
          >
            {project.name}
          </a>
          <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
            {project.privacy}
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-400 text-sm">
          <div className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 4 6.25v-.878z"/>
            </svg>
            <span>{project.forks}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm">
            <div className={`w-3 h-3 rounded-full ${project.languageColor}`}></div>
            <span className="text-gray-300">{project.language}</span>
          </div>
          <span className="text-gray-400 text-xs">
            Updated {project.updated}
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Job-Tracker-App",
      description: "Full-stack application for tracking job applications with authentication, CRUD operations, and analytics dashboard",
      language: "JavaScript",
      languageColor: "bg-yellow-500",
      stars: "23",
      forks: "7",
      privacy: "Public",
      updated: "2 days ago",
      link: "https://github.com/ayushchoudhary-dev/job-tracker-app",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"]
    },
    {
      name: "DevOps-Pipeline",
      description: "Complete CI/CD pipeline setup with Docker, Jenkins, and Kubernetes for automated deployment workflows",
      language: "Shell",
      languageColor: "bg-green-500",
      stars: "45",
      forks: "12",
      privacy: "Public",
      updated: "1 week ago",
      link: "https://github.com/ayushchoudhary-dev/devops-pipeline",
      technologies: ["Docker", "Jenkins", "Kubernetes", "Terraform", "AWS"]
    },
    {
      name: "Cloud-Infrastructure",
      description: "Terraform configurations for AWS cloud infrastructure with auto-scaling, load balancing, and monitoring",
      language: "HCL",
      languageColor: "bg-purple-500",
      stars: "67",
      forks: "23",
      privacy: "Public",
      updated: "3 days ago",
      link: "https://github.com/ayushchoudhary-dev/cloud-infrastructure",
      technologies: ["Terraform", "AWS", "CloudWatch", "Route53", "VPC"]
    },
    {
      name: "Microservices-Demo",
      description: "Containerized microservices architecture with API gateway, service discovery, and distributed tracing",
      language: "Go",
      languageColor: "bg-cyan-500",
      stars: "34",
      forks: "15",
      privacy: "Public",
      updated: "5 days ago",
      link: "https://github.com/ayushchoudhary-dev/microservices-demo",
      technologies: ["Go", "Docker", "Kong", "Consul", "Jaeger"]
    },
    {
      name: "Monitoring-Stack",
      description: "Complete observability stack with Prometheus, Grafana, and ELK for infrastructure and application monitoring",
      language: "YAML",
      languageColor: "bg-red-500",
      stars: "28",
      forks: "9",
      privacy: "Public",
      updated: "1 week ago",
      link: "https://github.com/ayushchoudhary-dev/monitoring-stack",
      technologies: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"]
    },
    {
      name: "Security-Automation",
      description: "Automated security scanning and compliance tools with vulnerability assessment and reporting capabilities",
      language: "Python",
      languageColor: "bg-blue-500",
      stars: "19",
      forks: "6",
      privacy: "Public",
      updated: "4 days ago",
      link: "https://github.com/ayushchoudhary-dev/security-automation",
      technologies: ["Python", "Ansible", "OWASP", "Nessus", "SonarQube"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* GitHub-style Header */}
        <motion.div
          className="mb-12 border-b border-gray-700 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                AC
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">ayushchoudhary-dev</h1>
                <p className="text-gray-400">DevOps Engineer & Full Stack Developer</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span>6 repositories</span>
                  </span>
                  <span>📍 India</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <span>Star</span>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3.293l6.854-6.855a.5.5 0 0 1 .708.708L8.707 4a1 1 0 0 0 0 1.414l6.855 6.855a.5.5 0 0 1-.708.708L8 6.122l-6.854 6.855a.5.5 0 1 1-.708-.708L7.293 5.414a1 1 0 0 0 0-1.414L.438-3.145a.5.5 0 1 1 .708-.708L8 3.293z"/>
                </svg>
                <span>Watch</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Repository Navigation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <nav className="flex items-center space-x-6 border-b border-gray-700">
            <button className="pb-3 border-b-2 border-orange-500 text-white flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5A1 1 0 0 1 4.5 1.5h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/>
              </svg>
              <span>Repositories</span>
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">6</span>
            </button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">Projects</button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">Packages</button>
          </nav>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectFolder key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm">
            View all repositories on{' '}
            <a 
              href="https://github.com/ayushchoudhary-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
