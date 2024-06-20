// JavaScript: Know More Alert
const knowMoreButtons = document.querySelectorAll('.btn-primary');

knowMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    alert('For more details, please contact us at info@fun-cations.com.');
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const notifications = [
        "Book your trip to Goa now and get a 20% discount!",
        "Limited-time offer: Kerala tour packages starting at just Rs. 9,990!",
        "Explore the royal heritage of Rajasthan with our exclusive deals!",
        "Adventure awaits in Himachal Pradesh! Book now and save 15%!",
        "Discover the beauty of Chikkamagaluru with our special offers!"
    ];

    function displayRandomNotification() {
        const randomIndex = Math.floor(Math.random() * notifications.length);
        const notificationMessage = notifications[randomIndex];

        const notificationContainer = document.getElementById('notification-container');
        notificationContainer.textContent = notificationMessage;
        notificationContainer.classList.add('show');

        setTimeout(() => {
            notificationContainer.classList.remove('show');
        }, 5000); // Hide the notification after 5 seconds
    }

    // Display a random notification every 10 seconds
    setInterval(displayRandomNotification, 10000);

    // Show the first notification immediately on page load
    displayRandomNotification();
});


