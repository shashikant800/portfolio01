import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/shashikant800',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Firebase'],
      category: 'Frontend',
      githubUrl: 'https://github.com/shashikant800',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, and historical data visualization.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'Chart.js', 'API Integration'],
      category: 'Frontend',
      githubUrl: 'https://github.com/shashikant800',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'REST API Server',
      description: 'Scalable REST API server with authentication, rate limiting, and comprehensive documentation.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
      category: 'Backend',
      githubUrl: 'https://github.com/shashikant800',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time metrics and scheduling features.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/shashikant800',
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with dark mode, animations, and contact form functionality.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/shashikant800',
      liveUrl: '#'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            A showcase of my recent work and creative projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter size={16} className="inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/70 rounded-full text-white hover:bg-black transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/70 rounded-full text-white hover:bg-black transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs rounded-full ${
                          darkMode
                            ? 'bg-gray-600 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



