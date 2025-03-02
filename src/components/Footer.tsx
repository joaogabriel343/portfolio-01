import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-[#6A5ACD]">
              JG<span className="text-white">.dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e funcionais.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 p-3 bg-[#6A5ACD] hover:bg-[#5A4ABD] rounded-full transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 flex items-center">
              Desenvolvido com <Heart size={16} className="mx-1 text-red-500 fill-red-500" /> por João Gabriel
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#home" className="hover:text-[#6A5ACD] transition-colors">Início</a>
            <a href="#about" className="hover:text-[#6A5ACD] transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-[#6A5ACD] transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-[#6A5ACD] transition-colors">Projetos</a>
            <a href="#testimonials" className="hover:text-[#6A5ACD] transition-colors">Depoimentos</a>
            <a href="#contact" className="hover:text-[#6A5ACD] transition-colors">Contato</a>
          </div>
          <p>&copy; {new Date().getFullYear()} João Gabriel do Vale Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;