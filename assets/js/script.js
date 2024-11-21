// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Smooth scroll to the section
      window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
      });
  });
});

// Sticky Navbar Effect
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > heroSection.offsetHeight - 100) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Hero Animation on Load
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(50px)';

  setTimeout(() => {
      heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
      heroContent.style.opacity = 1;
      heroContent.style.transform = 'translateY(0)';
  }, 300);
});

// Sticky Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Open project modal
function openModal(project) {
  document.getElementById(project + '-modal').style.display = 'flex';
}

// Close project modal
function closeModal(project) {
  document.getElementById(project + '-modal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('project-modal')) {
      closeModal(event.target.id.replace('-modal', ''));
  }
});
