const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');

const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    navLinks.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
})