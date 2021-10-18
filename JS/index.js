const hamburger = document.querySelector('.hamburger');
const nav_wrap = document.querySelector('.nav-list-wrap');

hamburger.addEventListener('click', (e) => {
    nav_wrap.classList.toggle('nav-list-wrap-toggle');
})