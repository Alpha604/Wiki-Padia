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
