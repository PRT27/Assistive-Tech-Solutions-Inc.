// Add event listener to button
document.querySelector('button').addEventListener('click', function() {
  // Alert message
  alert('Learn More button clicked!');
});

// Add event listener to nav links
document.querySelectorAll('nav ul li a').forEach(function(link) {
  link.addEventListener('click', function() {
    // Alert message
    alert('Nav link clicked!');
  });
});

// Add event listener to footer links
document.querySelectorAll('footer ul li a').forEach(function(link) {
  link.addEventListener('click', function() {
    // Alert message
    alert('Footer link clicked!');
  });
});
