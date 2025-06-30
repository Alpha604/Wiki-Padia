// Fonction pour arrondir une date à la tranche 10min
function roundDateTo10Min(date) {
  const minutes = date.getMinutes();
  // On arrondit à la dizaine inférieure multiple de 10
  const roundedMinutes = Math.floor(minutes / 10) * 10;
  return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')} ${date.getHours().toString().padStart(2,'0')}:${roundedMinutes.toString().padStart(2,'0')}`;
}

// Fonction pour parser une clé date "YYYY-MM-DD HH:MM" en Date
function parseSlotDate(slot) {
  return new Date(slot.replace(' ', 'T') + ':00');
}

// Fonction pour filtrer les tranches des 5 derniers jours
function filterLast5Days(slots) {
  const now = new Date();
  const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);
  return slots.filter(slot => parseSlotDate(slot) >= fiveDaysAgo);
}

// Mise à jour des données et graphique
function updateGraph() {
  // Récupérer les visites stockées
  let visitesData = localStorage.getItem('visitesPar10min');
  visitesData = visitesData ? JSON.parse(visitesData) : {};

  // Obtenir la tranche 10min actuelle
  const now = new Date();
  const currentSlot = roundDateTo10Min(now);

  // Incrémenter la visite dans la tranche actuelle
  visitesData[currentSlot] = (visitesData[currentSlot] || 0) + 1;

  // Sauvegarder dans localStorage
  localStorage.setItem('visitesPar10min', JSON.stringify(visitesData));

  // Trier les clés (slots) dans l'ordre chronologique
  let labels = Object.keys(visitesData).sort();

  // Filtrer pour garder seulement les 5 derniers jours
  labels = filterLast5Days(labels);

  // Récupérer les valeurs associées (après filtre)
  const data = labels.map(slot => visitesData[slot]);

  // Mise à jour du graphique
  if(window.visitesChart) {
    visitesChart.data.labels = labels;
    visitesChart.data.datasets[0].data = data;
    visitesChart.update();
  } else {
    // Création initiale du graphique
    const ctx = document.getElementById('visitesGraph').getContext('2d');
    window.visitesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Visites par tranche de 10 minutes (5 derniers jours)',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.7)'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            precision: 0,
            stepSize: 1
          },
          x: {
            ticks: {
              maxRotation: 90,
              minRotation: 45
            }
          }
        }
      }
    });
  }
}

// Lancer la mise à jour tout de suite
updateGraph();

// Si tu veux, tu peux aussi appeler updateGraph périodiquement, par ex. toutes les 5 min
// setInterval(updateGraph, 300000);
