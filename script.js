const form = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  const email = emailInput.value;

  if (!validateEmail(email)) {
    alert('Veuillez entrer une adresse e-mail valide.');
    return;
  }

  // Envoyer le formulaire ou effectuer d'autres actions ici
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}