// Navigation
document.querySelector('.toggleMenu').addEventListener('click', () => {
  document.querySelectorAll(".toggleMenu, .navigation").forEach(elem => elem.classList.toggle("active"));
})
// End Navigation