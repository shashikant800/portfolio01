import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code, Heart } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="about"
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
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className={`text-lg leading-relaxed space-y-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
                I'm a dedicated Computer Science student at{' '}
                <span className="font-semibold text-blue-600">Jawaharlal Nehru University</span>{' '}
                with a passion for full-stack development. My journey in technology began with 
                curiosity and has evolved into a commitment to creating impactful digital experiences.
              </p>
              
              <p>
                As a full-stack developer, I enjoy working across the entire development spectrum - 
                from crafting intuitive user interfaces to building robust backend systems. I believe 
                in writing clean, maintainable code and staying current with the latest industry trends 
                and best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or working on innovative solutions that can make a positive 
                impact in people's lives.
              </p>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className={`p-6 rounded-2xl border-l-4 border-blue-500 ${
              darkMode ? 'bg-gray-700/50' : 'bg-blue-50'
            }`}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Pursuing Computer Science at Polaris School of Technology, building a strong 
                foundation in software engineering principles.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border-l-4 border-teal-500 ${
              darkMode ? 'bg-gray-700/50' : 'bg-teal-50'
            }`}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-500 rounded-lg mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Development
                </h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Full-stack developer specializing in modern web and mobile technologies, 
                with experience in both frontend and backend development.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border-l-4 border-orange-500 ${
              darkMode ? 'bg-gray-700/50' : 'bg-orange-50'
            }`}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-500 rounded-lg mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Passion
                </h3>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Driven by a love for technology and innovation, always eager to learn new skills 
                and contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;