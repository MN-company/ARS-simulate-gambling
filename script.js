// Funzione per mostrare il pop-up di login
function showLoginPopup() {
  document.getElementById('login-popup').style.display = 'flex';
}

// Funzione per chiudere il pop-up di login
function closeLoginPopup() {
  document.getElementById('login-popup').style.display = 'none';
}

// Funzione per effettuare il login
function login() {
  // Recupera i valori dei campi di input
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Effettua le verifiche sui dati di login
  if (username === 'admin' && password === 'password') {
    alert('Login successful');
    closeLoginPopup();
  } else {
    alert('Invalid username or password');
  }
}

// Funzione per sottoscriversi alla mailing list
function subscribeToMailingList() {
  var email = document.getElementById('email').value;

  // Effettua le verifiche sull'indirizzo email
  if (validateEmail(email)) {
    // Invia l'indirizzo email al server o esegui l'azione desiderata
    alert('Email subscribed: ' + email);
    document.getElementById('email').value = '';
  } else {
    alert('Invalid email address');
  }
}

// Funzione per validare l'indirizzo email
function validateEmail(email) {
  // Utilizza un'espressione regolare per la validazione
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
