import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key];
      if (newKonami.length > konamiCode.length) {
        newKonami.shift();
      }
      setKonami(newKonami);

      if (newKonami.join('') === konamiCode.join('')) {
        setEasterEggActive(true);
        setTimeout(() => setEasterEggActive(false), 10000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami]);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        {easterEggActive && <EasterEgg />}
      </div>
    </ThemeProvider>
  );
}

export default App;