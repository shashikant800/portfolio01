import React, { useEffect, useRef, useState } from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Python', level: 78, category: 'Backend' },
    { name: 'Java', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with stagger effect
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, skill.name]));
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'from-blue-500 to-blue-600';
      case 'Backend': return 'from-green-500 to-green-600';
      case 'Database': return 'from-purple-500 to-purple-600';
      case 'Tools': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-1000 delay-${categoryIndex * 200} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className={`p-6 rounded-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <h3 className={`text-xl font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {getSkillsByCategory(category).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full rounded-full h-2 ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)} transition-all duration-1000 ease-out`}
                          style={{
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;