document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Only run scroll-spy on pages that have sections with IDs (home page)
  if (sections.length > 0) {
    function updateActiveLink() {
      let currentId = null;
      sections.forEach((section) => {
        if (!section.id) return;
        const top = section.getBoundingClientRect().top;
        if (top <= 120) {
          currentId = section.id;
        }
      });

      if (currentId) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
      }
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
  }

  // Hero button — only exists on index.html
  const heroButton = document.querySelector('.hero-button');
  if (heroButton) {
    heroButton.addEventListener('click', function () {
      const protectSection = document.querySelector('#protect');
      if (protectSection) {
        protectSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Contact form — only exists on index.html
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields before sending your message.');
        return;
      }

      this.reset();
      const feedback = document.querySelector('.form-message');
      feedback.textContent = `Thanks, ${name}! Your message has been received.`;
      feedback.classList.add('visible');
    });
  }
});
