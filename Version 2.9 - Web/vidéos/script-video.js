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

// Wiki bouton
document.getElementById('btn-wiki').addEventListener('click', function () {
    window.location.href = '../accueil.html'
})

// Actu bouton
document.getElementById('btn-actu').addEventListener('click', function () {
    window.location.href = '../actu.html'
})