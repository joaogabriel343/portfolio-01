import React, { useEffect, useRef } from 'react';

const EasterEgg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix effect settings
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Characters to display
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Draw function
    function draw() {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#6A5ACD';
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop when it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment drop
        drops[i]++;
      }
    }

    // Animation loop
    const interval = setInterval(draw, 33);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-6 rounded-lg text-center">
        <h2 className="text-[#6A5ACD] text-3xl font-bold mb-2">Easter Egg Encontrado!</h2>
        <p className="text-white">Você descobriu o código Konami! 🎮</p>
      </div>
    </div>
  );
};

export default EasterEgg;