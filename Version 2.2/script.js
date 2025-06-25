document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.querySelector(this.getAttribute('href')).style.display = 'block';
        });
    });
})


// Creer bouton
document.getElementById('btn-creat').addEventListener('click', function () {
    window.location.href = 'creer.html';
})

// Actu bouton
document.getElementById('btn-actu').addEventListener('click', function () {
    window.location.href = 'actu.html';
    console.warn('Alert');
})

// Apprendre le code Html
document.getElementById('html-btn').addEventListener('click', function () {
    window.location.href = 'code/code-html.html';
})

// Apprendre le code Css
document.getElementById('css-btn').addEventListener('click', function () {
    window.location.href = 'code/code-css.html';
})

// Apprendre le code Js
document.getElementById('js-btn').addEventListener('click', function () {
    window.location.href = 'code/code-js.html';
})

// GitHub
document.getElementById('GitHub').addEventListener('click', function () {
    window.open('https://github.com/Alpha604')
})


// Nav bouton
document.getElementById('btn-nav').addEventListener('click', function () {
    var nav = document.getElementById('nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none'
    }
    else {
        nav.style.display = 'block'
    }
})