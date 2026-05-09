const petalEmojis = ['🌸', '🌷', '✨', '🦋', '🌙', '⭐', '💫', '🌺', '🌼'];

function createPetal() {
  const container = document.getElementById('petals');
  if (!container) return;

  const petal = document.createElement('span');
  petal.classList.add('petal');
  petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];

  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 10;
  const delay = Math.random() * 6;
  const size = 12 + Math.random() * 12;

  petal.style.cssText = `
    left: ${left}%;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    font-size: ${size}px;
  `;

  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (duration + delay) * 1000);
}

// Spawn petals periodically
setInterval(createPetal, 700);

// Initial burst
for (let i = 0; i < 12; i++) {
  setTimeout(createPetal, i * 120);
}
