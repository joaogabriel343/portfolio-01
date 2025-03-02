import React from 'react';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="page-404">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-6">Página Não Encontrada</h2>
        <p className="text-xl mb-8 max-w-lg mx-auto">
          Ops! Parece que você encontrou um bug no sistema. A página que você está procurando não existe.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-white text-[#6A5ACD] rounded-full transition-all duration-300 hover:bg-opacity-90 shadow-lg"
        >
          <Home className="mr-2" size={20} /> Voltar para o Início
        </a>
        
        <div className="mt-16">
          <div className="inline-block p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <pre className="text-left text-sm">
              <code>
                {`// 404 Error Handler
function redirectToHome() {
  window.location.href = '/';
}

// Countdown to redirect
let seconds = 10;
const countdown = setInterval(() => {
  seconds--;
  if (seconds <= 0) {
    clearInterval(countdown);
    redirectToHome();
  }
}, 1000);`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;