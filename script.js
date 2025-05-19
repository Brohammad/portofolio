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

// Mouse Movement 3D Effect
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.project, .blog-card');
  const hero = document.querySelector('.hero');
  
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;
  
  // Hero section 3D effect
  if (hero) {
    const heroContent = hero.querySelectorAll('h2, p, .hero-buttons');
    heroContent.forEach(element => {
      const speed = element.getAttribute('data-speed') || 20;
      const x = mouseX * speed;
      const y = mouseY * speed;
      element.style.transform = `translateZ(20px) translateX(${x}px) translateY(${y}px)`;
    });
  }
  
  // Cards 3D effect
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;
    
    const angleX = (e.clientY - cardY) * 0.01;
    const angleY = (e.clientX - cardX) * -0.01;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
  });
});

// Reset card position when mouse leaves
document.addEventListener('mouseleave', () => {
  const cards = document.querySelectorAll('.project, .blog-card');
  cards.forEach(card => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});

// Add parallax effect to sections
const parallaxSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  parallaxSections.forEach(section => {
    const speed = section.getAttribute('data-speed') || 0.5;
    const rect = section.getBoundingClientRect();
    const scroll = window.pageYOffset;
    
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const yPos = -(scroll * speed);
      section.style.transform = `translateY(${yPos}px)`;
    }
  });
});

// Add 3D tilt effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 10;
    const angleY = (centerX - x) / 10;
    
    button.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});

// Add 3D effect to skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
  tag.addEventListener('mousemove', (e) => {
    const rect = tag.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    tag.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
  });
  
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});
