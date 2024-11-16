document.addEventListener("DOMContentLoaded", () => {
  // Fade out the loading screen
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.pointerEvents = "none";
    loadingScreen.addEventListener("transitionend", () => {
      loadingScreen.style.display = "none";
    });
  }, 1000);

  // Reveal sections with fade-in effect
  const fadeInElements = document.querySelectorAll(".fade-in");
  const revealOnScroll = () => {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  // Trigger animations on page load and scroll
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
