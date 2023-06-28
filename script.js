document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the email input value
  var emailInput = document.getElementById('newsletter-form').elements['email'];
  var email = emailInput.value;

  // Save the email to the database or perform any desired action
  saveEmailToDatabase(email);

  // Reset the form
  document.getElementById('newsletter-form').reset();

  // Show a success message or perform any desired action
  alert('Thank you for subscribing!');
});

function saveEmailToDatabase(email) {
  // Perform the necessary steps to save the email to your database or backend system
  // This is just a placeholder function, you should implement the actual functionality
}
