document.addEventListener('DOMContentLoaded', function () {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      function updateActiveLink() {
        let currentId = 'home';
        sections.forEach((section) => {
          const top = section.getBoundingClientRect().top;
          if (top <= 120) {
            currentId = section.id;
          }
        });

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
      }

      updateActiveLink();
      window.addEventListener('scroll', updateActiveLink);

      document.querySelector('.hero-button').addEventListener('click', function () {
        document.querySelector('#protect').scrollIntoView({ behavior: 'smooth' });
      });

      const form = document.getElementById('contact-form');
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
    });