import React, { useEffect, useRef } from 'react';
import { Code, Server, Database, GitBranch, Box } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'HTML', level: 95, icon: <Code size={24} />, category: 'frontend' },
    { name: 'CSS', level: 90, icon: <Code size={24} />, category: 'frontend' },
    { name: 'JavaScript', level: 92, icon: <Code size={24} />, category: 'frontend' },
    { name: 'React.js', level: 88, icon: <Code size={24} />, category: 'frontend' },
    { name: 'Node.js', level: 85, icon: <Server size={24} />, category: 'backend' },
    { name: 'MySql', level: 82, icon: <Server size={24} />, category: 'database' },
    { name: 'SQL Server', level: 80, icon: <Database size={24} />, category: 'database' },
    { name: 'Git', level: 85, icon: <GitBranch size={24} />, category: 'other' },
    { name: 'GitHub', level: 85, icon: <GitBranch size={24} />, category: 'other' },
    { name: 'Neo4J', level: 75, icon: <Box size={24} />, category: 'database' },
    { name: 'APIs REST', level: 88, icon: <Server size={24} />, category: 'backend' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.width = `${width}%`;
                (bar as HTMLElement).style.opacity = '1';
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'frontend', name: 'Front-end', icon: <Code size={20} /> },
    { id: 'backend', name: 'Back-end', icon: <Server size={20} /> },
    { id: 'database', name: 'Banco de Dados', icon: <Database size={20} /> },
    { id: 'other', name: 'Outras', icon: <GitBranch size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Minhas <span className="text-[#6A5ACD]">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-[#6A5ACD] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-[#6A5ACD] flex items-center justify-center mr-3">
                  <span className="text-white">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              </div>

              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                          <span className="text-[#6A5ACD] mr-2">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="progress-bar bg-[#6A5ACD] h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0"
                          style={{ width: '0%' }}
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Certificações e Reconhecimentos</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React Certified', 'Node.js Developer', 'SQL Expert'].map((cert, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 px-6 py-4 rounded-lg shadow-md border-l-4 border-[#6A5ACD] transform transition-transform hover:scale-105"
              >
                <span className="font-medium text-gray-800 dark:text-gray-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;