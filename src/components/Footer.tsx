import React from 'react';
import { Heart, Code, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Shashi Kant
            </div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating innovative digital solutions. 
              Currently studying Computer Science at Polaris School of Technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shashikant800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shashi-kant-b83a44258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'Java', 'Kotlin'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm">
            Made with <Heart size={16} className="mx-1 text-red-500" /> and <Code size={16} className="mx-1" /> by Shashi Kant
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Shashi Kant. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;