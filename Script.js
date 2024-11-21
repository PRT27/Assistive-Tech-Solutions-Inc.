// Hide sections initially
document.querySelector('.about-us-section').style.display = 'none';
document.querySelector('.services-section').style.display = 'none';
document.querySelector('.contact-us-section').style.display = 'none';

// Add event listeners to buttons
document.querySelector('.about-us-btn').addEventListener('click', function() {
  document.querySelector('.about-us-section').style.display = 'block';
  document.querySelector('.services-section').style.display = 'none';
  document.querySelector('.contact-us-section').style.display = 'none';
});

document.querySelector('.services-btn').addEventListener('click', function() {
  document.querySelector('.about-us-section').style.display = 'none';
  document.querySelector('.services-section').style.display = 'block';
  document.querySelector('.contact-us-section').style.display = 'none';
});

document.querySelector('.contact-us-btn').addEventListener('click', function() {
  document.querySelector('.about-us-section').style.display = 'none';
  document.querySelector('.services-section').style.display = 'none';
  document.querySelector('.contact-us-section').style.display = 'block';
});

// Add event listener to ARAN-VI button (if needed)
document.querySelector('.aran-vi-btn').addEventListener('click', function() {
  alert('ARAN-VI button clicked!');
});

// Chatbot Script
const chatbot = new ARANVIChatbot();
document.querySelector('#user-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const userQuestion = document.querySelector('#user-input').value;
    const response = chatbot.respond(userQuestion);
    document.querySelector('#chatbot-response').innerHTML = response;
  }
});
