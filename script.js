document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Randomize size and starting position
        const size = Math.random() * 20 + 10; // Hearts from 10px to 30px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Animation duration 2-5 seconds
        heart.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity

        body.appendChild(heart);

        // Remove heart after it falls off screen to prevent performance issues
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Create hearts at regular intervals
    setInterval(createHeart, 300); // Create a new heart every 300ms
});