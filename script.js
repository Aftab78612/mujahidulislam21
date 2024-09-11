document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const aiButton = document.getElementById('aiButton');
    const chatSection = document.getElementById('chatSection');
    const closeChat = document.getElementById('closeChat');

    aiButton.addEventListener('click', function() {
        chatSection.style.display = 'flex';
    });

    closeChat.addEventListener('click', function() {
        chatSection.style.display = 'none';
    });
});






