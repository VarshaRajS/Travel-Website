// JavaScript: Know More Alert
const knowMoreButtons = document.querySelectorAll('.btn-primary');

knowMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('For more details, please contact us at info@fun-cations.com.');
  });
});
