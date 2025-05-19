// Loading Screen Handler
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.querySelector('.loading');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      // Remove loading screen from DOM after animation
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000); // Show loading screen for at least 1 second
  }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    // Here you would typically send this to your backend
    alert('Thank you for subscribing!');
    newsletterForm.reset();
  });
}

// Add loading animation to sections
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});
