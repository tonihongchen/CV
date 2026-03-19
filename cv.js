// Añade un botón en tu HTML y este código en un archivo script.js
const btn = document.querySelector('.btn-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});