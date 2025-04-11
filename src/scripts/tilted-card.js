const cards = document.querySelectorAll('.card');
const maxTilt = 10; // Max degrees of tilt

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    // Calculate mouse position relative to the card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate tilt angles (normalize position and multiply by max tilt)
    // Tilt around Y axis based on X position, tilt around X axis based on Y position
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    const tiltX = -(y / (rect.height / 2)) * maxTilt; // Negate for natural feel

    // Apply the transform with perspective
    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(20px)`; // Added translateZ for slight lift
  });

  card.addEventListener('mouseleave', () => {
    // Reset transform on mouse leave
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });
});