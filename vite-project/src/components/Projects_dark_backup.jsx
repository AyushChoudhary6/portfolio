import React from 'react';



const Projects = () => {
  const projectsData = [
    {
      title: 'Epic Games Store Clone',
      description: 'A modern game library interface with dynamic content loading, user authentication, and game management features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      category: 'Web Development',
      status: 'Live'
    },
    {
      title: 'Steam Gaming Platform',
      description: 'Gaming platform with real-time multiplayer support, user profiles, achievements system, and community features.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      link: '#',
      category: 'Full Stack',
      status: 'In Progress'
    },
    {
      title: 'Gaming Dashboard',
      description: 'Real-time gaming analytics dashboard with performance metrics, player statistics, and interactive data visualizations.',
      tech: ['React', 'Chart.js', 'Gaming APIs', 'Tailwind'],
      link: '#',
      category: 'Dashboard',
      status: 'Completed'
    },
    {
      title: 'Mobile Gaming App',
      description: 'Cross-platform mobile gaming application with offline capabilities, cloud sync, and social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'WebRTC'],
      link: '#',
      category: 'Mobile Development',
      status: 'Beta'
    },
    {
      title: 'VR Experience Platform',
      description: 'Virtual reality content platform with immersive experiences, 3D interactions, and multi-user environments.',
      tech: ['Three.js', 'WebVR', 'Node.js', 'WebGL'],
      link: '#',
      category: 'VR/AR',
      status: 'Prototype'
    },
    {
      title: 'Gaming Accessories Store',
      description: 'E-commerce platform specialized in gaming hardware with product configurators and compatibility checks.',
      tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      link: '#',
      category: 'E-commerce',
      status: 'Live'
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl md:text-6xl font-bold mb-4 text-white">
          Projects
        </h2>
        {/* Orange underline */}
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-500 group">
              <div className="h-60 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-orange-500 text-7xl">�</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-orange-400 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-lg transform hover:scale-105"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
