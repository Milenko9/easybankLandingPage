const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menuMS');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-linkMS').forEach(n => n.
addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))

window.addEventListener('scroll', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
})
