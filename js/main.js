document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('recruitForm');
  const msg = document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Simple validation
      const discordId = form.querySelector('input[name="discord_id"]');
      if(discordId && !discordId.checkValidity()){
        msg.textContent = 'L\'ID Discord doit être un nombre valide (17-20 chiffres).';
        discordId.focus();
        return;
      }

      const action = form.getAttribute('action');
      const data = new FormData(form);
      msg.textContent = 'Envoi en cours...';
      fetch(action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if(response.ok){
          form.reset();
          msg.textContent = 'Candidature envoyée. Merci !';
        } else {
          return response.json().then(err => { throw err; });
        }
      }).catch(err => {
        msg.textContent = 'Erreur lors de l\'envoi. Vérifiez l\'ID Formspree et votre connexion.';
      });
    });
  }
});

// Ajout futur: mise en évidence du menu actif
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelectorAll('.main-nav a');
  nav.forEach(a => { if(a.href === location.href) a.classList.add('active'); });
});