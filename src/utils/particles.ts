interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export const initParticles = () => {
  const canvas = document.getElementById('particles-js') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Set canvas dimensions
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle settings
  const particlesArray: Particle[] = [];
  const numberOfParticles = 100;
  const colors = ['#6A5ACD', '#8A7AED', '#9683EC'];

  // Create particles
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = Math.random() * 1 - 0.5;
    const speedY = Math.random() * 1 - 0.5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particlesArray.push({
      x,
      y,
      size,
      speedX,
      speedY,
      color
    });
  }

  // Draw particles
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
      const p = particlesArray[i];
      
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Update position
      p.x += p.speedX;
      p.y += p.speedY;

      // Bounce off edges
      if (p.x > canvas.width || p.x < 0) {
        p.speedX = -p.speedX;
      }
      if (p.y > canvas.height || p.y < 0) {
        p.speedY = -p.speedY;
      }

      // Connect particles
      connectParticles(p, i);
    }
  }

  // Connect particles with lines
  function connectParticles(p: Particle, index: number) {
    for (let j = index + 1; j < particlesArray.length; j++) {
      const p2 = particlesArray[j];
      const distance = Math.sqrt(
        Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
      );

      if (distance < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(106, 90, 205, ${1 - distance / 150})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  }

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.x;
    mouseY = e.y;

    // Attract particles to mouse
    for (let i = 0; i < particlesArray.length; i++) {
      const p = particlesArray[i];
      const distance = Math.sqrt(
        Math.pow(p.x - mouseX, 2) + Math.pow(p.y - mouseY, 2)
      );

      if (distance < 100) {
        const angle = Math.atan2(mouseY - p.y, mouseX - p.x);
        p.speedX += Math.cos(angle) * 0.2;
        p.speedY += Math.sin(angle) * 0.2;

        // Limit speed
        const maxSpeed = 3;
        const currentSpeed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY);
        if (currentSpeed > maxSpeed) {
          p.speedX = (p.speedX / currentSpeed) * maxSpeed;
          p.speedY = (p.speedY / currentSpeed) * maxSpeed;
        }
      }
    }
  });

  // Animation loop
  function animate() {
    drawParticles();
    requestAnimationFrame(animate);
  }

  animate();
};