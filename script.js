console.log("javascriptt is connected");
// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu'); // Toggle visibility
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(40, 44, 52, 1)'; // Solid color on scroll
  } else {
    navbar.style.backgroundColor = 'rgba(40, 44, 52, 0.9)'; // Semi-transparent
  }
});
