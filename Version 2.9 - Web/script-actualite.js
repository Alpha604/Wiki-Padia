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

// Wiki bouton
document.getElementById('btn-wiki').addEventListener('click', function () {
    window.location.href = 'accueil.html'
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


// Quand on clique sur "Lire plus"
document.querySelectorAll('.plus').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.sidebar;
    const targetSidebar = document.getElementById(targetId);

    // Ferme toutes les sidebars d'abord
    document.querySelectorAll('.sidebar').forEach(s => s.classList.remove('open'));

    // Ouvre la bonne
    if (targetSidebar) {
      targetSidebar.classList.add('open');
    }
  });
});

// Quand on clique sur ✖
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.sidebar').classList.remove('open');
  });
});

// Recherche
const searchInput = document.querySelector(".textInput");
const actus = document.querySelectorAll(".actu");

searchInput.addEventListener("input", () => {
  const search = searchInput.value.toLowerCase();

  actus.forEach(actu => {
    const content = actu.textContent.toLowerCase();
    if (content.includes(search)) {
      actu.style.display = "block"; // ou "flex" selon ton design
    } else {
      actu.style.display = "none";
    }
  });
});
