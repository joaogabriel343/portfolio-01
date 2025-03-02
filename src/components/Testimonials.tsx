import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CEO",
      company: "TechSolutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      text: "João Gabriel desenvolveu nosso sistema de gestão com excelência. Sua capacidade técnica e comprometimento com prazos foram impressionantes. Recomendo fortemente seus serviços para qualquer empresa que busque qualidade e profissionalismo."
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Diretor de Tecnologia",
      company: "Inovação Digital",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      text: "Contratamos o João para desenvolver nossa plataforma de e-commerce e o resultado superou todas as expectativas. Além de entregar um código limpo e bem estruturado, ele implementou funcionalidades adicionais que melhoraram significativamente a experiência do usuário."
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Gerente de Projetos",
      company: "Startup Connect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      rating: 4,
      text: "A colaboração com João Gabriel foi excelente. Ele entendeu perfeitamente nossas necessidades e desenvolveu uma solução personalizada que otimizou nossos processos internos. Sua comunicação clara e disponibilidade para ajustes foram diferenciais importantes."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-[#6A5ACD]">Depoimentos</span> de Clientes
          </h2>
          <div className="w-20 h-1 bg-[#6A5ACD] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Veja o que dizem aqueles que já trabalharam comigo e confiaram em meus serviços.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10 relative">
                    <div className="absolute top-6 right-8 text-[#6A5ACD] opacity-20">
                      <Quote size={60} />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-[#6A5ACD]"
                        />
                      </div>
                      <div>
                        <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role} em {testimonial.company}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-gray-800 dark:text-white hover:bg-[#6A5ACD] hover:text-white transition-colors z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg text-gray-800 dark:text-white hover:bg-[#6A5ACD] hover:text-white transition-colors z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-[#6A5ACD]' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;