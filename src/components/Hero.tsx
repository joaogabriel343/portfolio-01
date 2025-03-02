import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const skills = ['Desenvolvedor Full Stack', 'React.js', 'Node.js', 'Express.js', 'SQL Server'];
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    const type = () => {
      const currentSkill = skills[skillIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentSkill.substring(0, charIndex - 1);
          charIndex--;
        }
        typingDelay = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentSkill.substring(0, charIndex + 1);
          charIndex++;
        }
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentSkill.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typingDelay = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingDelay);
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container" id="particles-js"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            João Gabriel <br />
            <span className="text-[#6A5ACD]">do Vale Souza</span>
          </h1>
          
          <div className="h-16 mb-6">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              <span ref={typingRef} className="typing"></span>
              <span className="typing-cursor">|</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-[#6A5ACD] hover:bg-[#5A4ABD] text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Ver Projetos <ArrowRight size={18} />
            </a>
            <a 
              href="https://wa.me/5535984196098?text=Olá!%20Gostaria%20de%20falar%20sobre%20um%20projeto." 
              className="px-8 py-3 border-2 border-[#6A5ACD] text-[#6A5ACD] dark:text-[#8A7AED] hover:bg-[#6A5ACD] hover:text-white dark:hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Contratar Agora
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#6A5ACD] to-purple-700 p-1 shadow-xl animate-float">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-800">
              <img 
                src="https://i.postimg.cc/7LF7LyGn/Imagem-do-Whats-App-de-2025-03-01-s-21-20-25-7f65d5ae.jpg" 
                alt="João Gabriel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;