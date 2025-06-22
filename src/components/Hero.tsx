import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
              Shashi Kant
            </span>
          </h1>
          
          <div className={`text-xl sm:text-2xl lg:text-3xl font-light mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="typing-animation">Full Stack Developer</span>
          </div>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          } transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Computer Science student at Polaris School of Technology, passionate about creating 
            innovative web and mobile applications with modern technologies.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 border-2 font-semibold rounded-full transform transition-all duration-300 hover:scale-105 active:scale-95 ${
                darkMode
                  ? 'border-white text-white hover:bg-white hover:text-gray-900'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>

          <div className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-900 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href="https://github.com/shashikant800"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shashi-kant-b83a44258/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
            darkMode ? 'text-white' : 'text-gray-900'
          } transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;