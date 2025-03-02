import React, { useState } from 'react';
import { Download, Calendar, GraduationCap, Briefcase, Coffee, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'timeline' | 'fun'>('about');

  const timelineEvents = [
    {
      year: '2024 - Presente',
      title: 'Desenvolvedor Full Stack',
      company: 'CalmDev',
      description: 'Desenvolvimento de aplicações web utilizando Node.js, SQL Server e APIs REST.',
      icon: <Briefcase className="w-6 h-6 text-[#6A5ACD]" />
    },
    {
      year: '2023 - 2027',
      title: 'Graduação em Ciência da Computação',
      company: 'Universidade Federal de Alfenas',
      description: 'Formação acadêmica com foco em desenvolvimento de software e sistemas.',
      icon: <GraduationCap className="w-6 h-6 text-[#6A5ACD]" />
    },
    {
      year: '2023 - 2023',
      title: 'Desenvolvimento WebSite',
      company: 'Harmonizart',
      description: 'Primeiro contato profissional com desenvolvimento web e sistemas.',
      icon: <Code className="w-6 h-6 text-[#6A5ACD]" />
    }
  ];

  const funFacts = [
    {
      icon: <Coffee className="w-6 h-6 text-[#6A5ACD]" />,
      fact: 'Sou torcedor do Galo (Atlético Mineiro).'
    },
    {
      icon: <Code className="w-6 h-6 text-[#6A5ACD]" />,
      fact: 'Comecei a programar aos 17 anos desenvolvendo website.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#6A5ACD]" />,
      fact: 'Apaixonado por resolver problemas complexos e criar interfaces intuitivas.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sobre <span className="text-[#6A5ACD]">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-[#6A5ACD] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-full h-full absolute -left-4 -top-4 border-2 border-[#6A5ACD] rounded-lg"></div>
              <img 
                src="https://wallpapercave.com/wp/wp4932288.jpg" 
                alt="João Gabriel trabalhando" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>

          <div className="md:w-3/5">
            <div className="mb-6">
              <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button 
                  className={`py-2 px-4 ${activeTab === 'about' ? 'border-b-2 border-[#6A5ACD] text-[#6A5ACD]' : 'text-gray-500 dark:text-gray-400'}`}
                  onClick={() => setActiveTab('about')}
                >
                  Sobre
                </button>
                <button 
                  className={`py-2 px-4 ${activeTab === 'timeline' ? 'border-b-2 border-[#6A5ACD] text-[#6A5ACD]' : 'text-gray-500 dark:text-gray-400'}`}
                  onClick={() => setActiveTab('timeline')}
                >
                  Trajetória
                </button>
                <button 
                  className={`py-2 px-4 ${activeTab === 'fun' ? 'border-b-2 border-[#6A5ACD] text-[#6A5ACD]' : 'text-gray-500 dark:text-gray-400'}`}
                  onClick={() => setActiveTab('fun')}
                >
                  Curiosidades
                </button>
              </div>
            </div>

            {activeTab === 'about' && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">João Gabriel do Vale Souza</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Desenvolvedor Full Stack de 20 anos, apaixonado por criar soluções tecnológicas inovadoras e funcionais. 
                  Criado em Alfenas, MG, combino criatividade e habilidades técnicas para desenvolver aplicações 
                  web modernas e responsivas.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Especializado em React.js para front-end e Node.js para back-end, tenho conhêcimento em 
                  desenvolvimento de APIs e integração com bancos de dados SQL Server. Busco constantemente 
                  aprimorar minhas habilidades e acompanhar as tendências do mercado de desenvolvimento.
                </p>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1MG-wkIzC_8H3SELT0Q31MlAuUEueu-_-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white rounded-full transition-all duration-300 shadow-md"
                >
                  <Download className="mr-2 h-5 w-5" /> Baixar Currículo
                </a>

              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-6 animate-fadeIn">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900">
                        {event.icon}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-[#6A5ACD] mr-2" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{event.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{event.company}</p>
                      <p className="text-gray-700 dark:text-gray-400 mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'fun' && (
              <div className="space-y-6 animate-fadeIn">
                {funFacts.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">{item.fact}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;