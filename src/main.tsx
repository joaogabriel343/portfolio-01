import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initParticles } from './utils/particles.ts';

const Root = () => {
  useEffect(() => {
    // Initialize particles after component mounts
    setTimeout(() => {
      initParticles();
    }, 100);
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);