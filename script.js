// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dark/light mode
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Project filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      card.style.display =
        filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
    });
  });
});

// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert('Thank you! Your message has been sent.');
    form.reset();
  } else {
    alert('Oops! Something went wrong. Please try again.');
  }
});


