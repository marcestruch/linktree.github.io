document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición escalonada
    const cards = document.querySelectorAll('.profile-card, .links-card, .social-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});
