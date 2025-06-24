// Ouverture au clic sur "Lire plus" de 1
document.getElementById("actu1").addEventListener("click", function () {
    document.getElementById("sidebar1").classList.add("open");
});

// Fermeture au clic sur le bouton ✖ de 1
document.getElementById("fermerBtn").addEventListener("click", function () {
    document.getElementById("sidebar1").classList.remove("open");
});

// Ouverture au clic sur "Lire plus" de 2
document.getElementById("actu2").addEventListener("click", function () {
    document.getElementById("sidebar2").classList.add("open");
});

// Fermeture au clic sur le bouton ✖ de 2
document.getElementById("fermerBtn").addEventListener("click", function () {
    document.getElementById("sidebar2").classList.remove("open");
});