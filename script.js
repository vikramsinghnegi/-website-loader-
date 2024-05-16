// script.js

document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');
  var loadingText = document.getElementById('loading-text');

  // Simulate loading process
  var percentage = 0;
  var interval = setInterval(function() {
    percentage += 1;
    loadingText.textContent = percentage + '%';

    // Once loading reaches 100%, hide the loader and show the content
    if (percentage >= 100) {
      clearInterval(interval);
      loader.style.display = 'none';
      content.style.display = 'block';
    }
  }, 300); // Adjust the interval time as needed to simulate different loading times
});
