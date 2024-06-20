// JavaScript: Know More Alert
const knowMoreButtons = document.querySelectorAll('.btn-primary');

knowMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('For more details, please contact us at info@fun-cations.com.');
  });
});

// JavaScript to enlarge cards on hover
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('enlarge');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('enlarge');
        });
    });
});

