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