import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Harmonizart Dashboard",
      description: "Dashboard completo para gerenciamento de uma Escola Musicais, com análise de Cliente, atendimento por chatBot.",
      image: "https://i.postimg.cc/gJ7JNydc/image.png",
      technologies: ["HTML", "CSS", "SQL Server", "Open.IA"],
      liveLink: "https://joaogabriel343.github.io/Harmonizart.io/",
      githubLink: "https://github.com/joaogabriel343/Harmonizart.io"
    },
    {
      id: 2,
      title: "Sistema de Gestão Educacionais",
      description: "Aplicação para gerenciamento de tarefas e projetos Escolares, com recursos de colaboração em tempo real e acompanhamento de progresso.",
      image: "https://i.postimg.cc/QdDpQD04/image.png",
      technologies: ["React.js", "TypeScript", "Node.js", "SQL Server"],
      liveLink: "https://eduai-home-page.lovable.app/#",
      githubLink: "https://github.com/joaogabriel343/Edu-IA-JG.git"
    },
    {
      id: 3,
      title: "Plataforma de Vistorias",
      description: "Plataforma de controle com sistema de vistorias, atividades interativos e laudos automáticos.",
      image: "https://i.postimg.cc/sXMSjggX/image.png",
      technologies: ["React.js", "TypeScript", "Node.js", "SQL Server"],
      liveLink: "https://vistoria-souza.lovable.app/",
      githubLink: "https://github.com/joaogabriel343/souza-vistorias.git"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Meus <span className="text-[#6A5ACD]">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-[#6A5ACD] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, aplicando as melhores práticas e tecnologias modernas.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-64 md:h-auto relative group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <div className="flex justify-between">
                            <a 
                              href={project.liveLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white flex items-center gap-1 hover:text-[#6A5ACD] transition-colors"
                            >
                              <ExternalLink size={16} /> Live Demo
                            </a>
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white flex items-center gap-1 hover:text-[#6A5ACD] transition-colors"
                            >
                              <Github size={16} /> Código
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tecnologias utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-[#6A5ACD] dark:text-purple-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white rounded-lg transition-colors flex items-center gap-2"
                        >
                          <ExternalLink size={16} /> Ver Projeto
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-[#6A5ACD] text-[#6A5ACD] dark:text-[#8A7AED] hover:bg-[#6A5ACD] hover:text-white dark:hover:text-white rounded-lg transition-colors flex items-center gap-2"
                        >
                          <Github size={16} /> Repositório
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-gray-800 dark:text-white hover:bg-[#6A5ACD] hover:text-white transition-colors z-10"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-gray-800 dark:text-white hover:bg-[#6A5ACD] hover:text-white transition-colors z-10"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentProject === index ? 'bg-[#6A5ACD]' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;