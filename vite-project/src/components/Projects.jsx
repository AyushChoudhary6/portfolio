import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectFolder = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    if (project.html_url) {
      window.open(project.html_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-all duration-200 group relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -2 }}
      onClick={handleCardClick}
    >
      {/* Tooltip */}
      {isHovered && project.description && (
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded shadow-lg border border-gray-600 z-10 whitespace-nowrap max-w-xs"
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
          <span className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors">
            {project.name}
          </span>
          <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
            {project.private ? 'Private' : 'Public'}
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-400 text-sm">
          <div className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <span>{project.stargazers_count || 0}</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 4 6.25v-.878z"/>
            </svg>
            <span>{project.forks_count || 0}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors">
        {project.description || 'No description available'}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {project.language && (
            <div className="flex items-center space-x-1 text-sm">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
              <span className="text-gray-300">{project.language}</span>
            </div>
          )}
          <span className="text-gray-400 text-xs">
            Updated {formatDate(project.updated_at)}
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.topics && project.topics.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
          {project.topics && project.topics.length > 3 && (
            <span className="text-gray-400 text-xs px-2 py-1">
              +{project.topics.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Helper functions
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: 'bg-yellow-500',
    Python: 'bg-blue-500',
    Java: 'bg-orange-500',
    TypeScript: 'bg-blue-600',
    HTML: 'bg-red-500',
    CSS: 'bg-purple-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-600',
    Shell: 'bg-green-500',
    Solidity: 'bg-gray-500',
    Dockerfile: 'bg-blue-400'
  };
  return colors[language] || 'bg-gray-500';
};

const formatDate = (dateString) => {
  if (!dateString) return 'recently';
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('featured'); // 'featured' or 'all'

  // Target repositories for featured section
  const targetRepos = [
    'CareerVault',
    'Scriptify', 
    'full-stack_chatApp',
    'Ethereum-fund-me'
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const username = 'AyushChoudhary6'; // Your GitHub username
        
        // Fetch all repos
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const allRepos = await response.json();
        
        // Set all projects for the "All" tab
        setAllProjects(allRepos);
        
        // Filter for target repositories for featured section
        const filteredRepos = allRepos.filter(repo => 
          targetRepos.some(targetName => 
            repo.name.toLowerCase().includes(targetName.toLowerCase()) ||
            targetName.toLowerCase().includes(repo.name.toLowerCase())
          )
        );

        // If we don't have all featured repos, add fallback data
        const fallbackData = [
          {
            name: 'CareerVault',
            description: 'A comprehensive career management platform for job seekers to track applications, interviews, and career progress.',
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['react', 'nodejs', 'career', 'job-tracking'],
            private: false
          },
          {
            name: 'Scriptify',
            description: 'Automated script generation and management tool for DevOps workflows and system administration.',
            language: 'Python',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['python', 'automation', 'devops', 'scripts'],
            private: false
          },
          {
            name: 'full-stack_chatApp',
            description: 'Real-time chat application with user authentication, message encryption, and responsive design.',
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['react', 'nodejs', 'socket-io', 'chat'],
            private: false
          },
          {
            name: 'Ethereum-fund-me',
            description: 'Decentralized crowdfunding platform built on Ethereum blockchain with smart contract integration.',
            language: 'Solidity',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['solidity', 'ethereum', 'blockchain', 'web3'],
            private: false
          }
        ];

        // Merge fetched data with fallback data for featured projects
        const projectsData = targetRepos.map(targetName => {
          const fetchedRepo = filteredRepos.find(repo => 
            repo.name.toLowerCase().includes(targetName.toLowerCase()) ||
            targetName.toLowerCase().includes(repo.name.toLowerCase())
          );
          
          const fallbackRepo = fallbackData.find(repo => 
            repo.name.toLowerCase().includes(targetName.toLowerCase())
          );
          
          return fetchedRepo || fallbackRepo;
        }).filter(Boolean);

        setProjects(projectsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        
        // Use fallback data on error
        const fallbackFeatured = [
          {
            name: 'CareerVault',
            description: 'A comprehensive career management platform for job seekers to track applications, interviews, and career progress.',
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['react', 'nodejs', 'career', 'job-tracking'],
            private: false
          },
          {
            name: 'Scriptify',
            description: 'Automated script generation and management tool for DevOps workflows and system administration.',
            language: 'Python',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['python', 'automation', 'devops', 'scripts'],
            private: false
          },
          {
            name: 'full-stack_chatApp',
            description: 'Real-time chat application with user authentication, message encryption, and responsive design.',
            language: 'JavaScript',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['react', 'nodejs', 'socket-io', 'chat'],
            private: false
          },
          {
            name: 'Ethereum-fund-me',
            description: 'Decentralized crowdfunding platform built on Ethereum blockchain with smart contract integration.',
            language: 'Solidity',
            stargazers_count: 0,
            forks_count: 0,
            html_url: '#',
            updated_at: new Date().toISOString(),
            topics: ['solidity', 'ethereum', 'blockchain', 'web3'],
            private: false
          }
        ];
        
        setProjects(fallbackFeatured);
        setAllProjects(fallbackFeatured); // Use same data as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const currentProjects = activeTab === 'featured' ? projects : allProjects;

  if (loading) {
    return (
      <section id="projects" className="min-h-screen bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

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
                <h1 className="text-3xl font-bold text-white mb-1">AyushChoudhary6</h1>
                <p className="text-gray-400">DevOps Engineer & Full Stack Developer</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    <span>{activeTab === 'featured' ? projects.length : allProjects.length} repositories</span>
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
              <a 
                href="https://github.com/AyushChoudhary6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>Follow</span>
              </a>
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
            <button 
              onClick={() => setActiveTab('featured')}
              className={`pb-3 flex items-center space-x-2 transition-colors ${
                activeTab === 'featured' 
                  ? 'border-b-2 border-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5A1 1 0 0 1 4.5 1.5h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/>
              </svg>
              <span>Featured Repositories</span>
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">{projects.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('all')}
              className={`pb-3 flex items-center space-x-2 transition-colors ${
                activeTab === 'all' 
                  ? 'border-b-2 border-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.75 0h8.5C11.216 0 12 .784 12 1.75v8.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 1 .25.25v.5c0 .138-.112.25-.25.25h-2.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25h.018c-.012.082-.018.165-.018.25v-8.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-.5c0-.138.112-.25.25-.25h.5c.138 0 .25.112.25.25v.5C12 11.216 11.216 12 10.25 12h-8.5C.784 12 0 11.216 0 10.25v-8.5C0 .784.784 0 1.75 0z"/>
              </svg>
              <span>All Projects</span>
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">{allProjects.length}</span>
            </button>
          </nav>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            className="mb-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-yellow-400 text-sm">
              <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              Using cached project data. Live data will load on next refresh.
            </p>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          key={activeTab} // Force re-render on tab change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`grid gap-6 ${
            activeTab === 'all' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {currentProjects.map((project, index) => (
              <ProjectFolder key={`${activeTab}-${project.name}`} project={project} index={index} />
            ))}
          </div>
          
          {currentProjects.length === 0 && !loading && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5A1 1 0 0 1 4.5 1.5h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/>
              </svg>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No repositories found</h3>
              <p className="text-gray-500">
                {activeTab === 'featured' 
                  ? 'Featured repositories will appear here once they are available.'
                  : 'All repositories will be displayed here once loaded.'
                }
              </p>
            </div>
          )}
        </motion.div>

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
              href="https://github.com/AyushChoudhary6" 
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
