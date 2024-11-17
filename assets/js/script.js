// Canvas Particle Animation
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

// Create Particle Class
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Bounce off walls
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y *= -1;
    }

    this.draw();
  }
}

// Initialize Particles
function initParticles() {
  particles.length = 0;
  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.8)`;
    const velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    };
    particles.push(new Particle(x, y, radius, color, velocity));
  }
}

// Animate Particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => particle.update());
  requestAnimationFrame(animateParticles);
}

// Handle Canvas Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Parallax Effect for Profile Image
const profilePic = document.querySelector(".profile-pic");
if (profilePic) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    profilePic.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
}

// Scroll Animation for About Section
const aboutContainer = document.querySelector(".about-container");
if (aboutContainer) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutContainer.style.opacity = "1";
          aboutContainer.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  observer.observe(aboutContainer);
}

// Dynamic Gradient Glow for About Section
const aboutSection = document.querySelector(".about");
if (aboutSection) {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    aboutSection.style.background = `radial-gradient(circle at ${
      x * 100
    }% ${y * 100}%, #1e3c72, #2a5298)`;
  });
}

// Ensure About Content is Visible Without JS
document.addEventListener("DOMContentLoaded", () => {
  if (aboutContainer) {
    aboutContainer.style.opacity = "1";
    aboutContainer.style.transform = "translateY(0)";
  }
});


// Force scroll to top on page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner after page load
  }, 0);
});

// Scroll Animation for Skills Section
const skillsGrid = document.querySelector('.skills-grid');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillsGrid.style.opacity = '1';
        skillsGrid.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.3 }
);

// Initial state (hidden)
skillsGrid.style.opacity = '0';
skillsGrid.style.transform = 'translateY(50px)';

// Observe the skills grid
observer.observe(skillsGrid);



// Initialize Particles and Start Animation
initParticles();
animateParticles();
