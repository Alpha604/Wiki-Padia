document.getElementById('btn-wiki').addEventListener('click', function () {
    window.location.href = '../../accueil.html';
})

//Début script connexion
document.addEventListener("DOMContentLoaded", function () {

  // Personnel (ADM)
  const boutonPersonnel = document.getElementById("personnel");
  const contenuPersonnel = document.getElementById("personnel-content");

  boutonPersonnel.addEventListener("click", function () {
    contenuPersonnel.style.display = (contenuPersonnel.style.display === "block") ? "none" : "block";
  });

  const input = document.getElementById('numberInput');

  if (input) {
    // Supprimer les écouteurs d'événements existants pour éviter les doublons
    input.removeEventListener('mouseover', changePlaceholder);
    input.removeEventListener('mouseout', resetPlaceholder);

    // Ajouter les nouveaux écouteurs d'événements
    input.addEventListener('mouseover', changePlaceholder);
    input.addEventListener('mouseout', resetPlaceholder);
  } else {
    console.error("L'élément avec l'ID 'numberInput' n'a pas été trouvé.");
  }

  function changePlaceholder() {
    this.setAttribute('placeholder', 'XXXX');
  }

  function resetPlaceholder() {
    this.setAttribute('placeholder', 'CDS Alpha à 4 chiffres');
  }

  // Ajout de la fonctionnalité de limitation de chiffres
  const numberInput = document.getElementById('numberInput');
  if (numberInput) {
    numberInput.addEventListener('input', limitDigits);
  } else {
    console.error("L'élément avec l'ID 'numberInput' n'a pas été trouvé.");
  }

  function limitDigits() {
    if (this.value.length > 4) {
      this.value = this.value.slice(0, 4);
    }
  }

  const aa = document.getElementById('aa');
  const pa = document.getElementById('pa');
  const ea = document.getElementById('ea');

  ea.addEventListener("click", function() {
    window.location.href = ('alpha.html');
  })

  pa.addEventListener("click", function() {
    window.location.href = ('alpha.html');
  })

  aa.addEventListener("click", function() {
    window.location.href = ('admin.html');
  })

});


//Autre bouts


const codeadm = "ID = ADM1 mdp = admin CDS = 0000"
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("connecter").addEventListener("click", function () {
    const id = document.getElementById("IDadm").value.trim();
    const mdp = document.getElementById("MDPadm").value.trim();
    const code = document.getElementById("numberInput").value.trim();
    const message = document.getElementById("messageErreur-adm");

    // Masquer le message au départ
    message.style.display = "none";

    // Vérifier les champs
    if (!id || !mdp || !code) {
      message.textContent = "Veuillez remplir tous les champs.";
      message.style.color = "red";
      message.style.display = "block";
      return;
    }

    // Vérifier que le code fait bien 4 chiffres
    if (!/^\d{4}$/.test(code)) {
      message.textContent = "Le code doit contenir exactement 4 chiffres.";
      message.style.color = "red";
      message.style.display = "block";
      return;
    }

    // Identifiants valides (exemples)
    const identifiantsValidés = {
      "ADM1": { mdp: "admin", code: "0000" }
    };

    if (
      identifiantsValidés[id] &&
      identifiantsValidés[id].mdp === mdp &&
      identifiantsValidés[id].code === code
    ) {
      // Succès
      window.location.href = "../dev.html"; // remplace par ta vraie page admin
    } else {
      message.textContent = "Identifiant, mot de passe ou code incorrect.";
      message.style.color = "red";
      message.style.display = "block";
    }
  });
});

//Fin script connexion