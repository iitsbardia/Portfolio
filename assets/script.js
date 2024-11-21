// Smooth Scroll to Contact Section
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
});

// Form Validation and Success Animation
document.querySelector('.contact-form form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Simple validation
  if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
  }

  // Simulating form submission (you would replace this with your actual backend logic)
  const form = event.target;
  form.innerHTML = "<div class='success-message'>Your message has been sent successfully! 🎉</div>";

  // Optionally reset the form after a few seconds
  setTimeout(() => {
      form.reset();
      form.innerHTML = `
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
      `;
  }, 4000);
});
