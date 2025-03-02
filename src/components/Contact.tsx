import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Entre em <span className="text-[#6A5ACD]">Contato</span>
        </h2>
        <div className="w-20 h-1 bg-[#6A5ACD] mx-auto mb-6"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Tem um projeto em mente ou quer conversar sobre oportunidades de trabalho? Entre em contato!
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-12 inline-block">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Informações de Contato</h3>
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <Mail size={20} className="text-[#6A5ACD]" />
                <a href="mailto:28090420joaogabriel@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#6A5ACD] dark:hover:text-[#8A7AED] transition-colors">
                  28090420joaogabriel@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-[#6A5ACD]" />
                <a href="tel:+5535984196098" className="text-gray-600 dark:text-gray-400 hover:text-[#6A5ACD] dark:hover:text-[#8A7AED] transition-colors">
                  +55 (35) 98419-6098
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={20} className="text-[#6A5ACD]" />
                <p className="text-gray-600 dark:text-gray-400">Alfenas, Minas Gerais - Brasil</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Redes Sociais</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/joaogabriel343" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#6A5ACD] hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/joão-gabriel-do-vale-souza-a99687306/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#6A5ACD] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/j0ao.gabr1ell/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-[#6A5ACD] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5535984196098?text=Olá!%20Gostaria%20de%20falar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors">
              Fale comigo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
