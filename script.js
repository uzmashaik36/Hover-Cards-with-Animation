 //  Extra tilt animation with JS
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * 20;
        const rotateY = ((x / rect.width) - 0.5) * 20;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateX(0) rotateY(0)';
      });
    });
  