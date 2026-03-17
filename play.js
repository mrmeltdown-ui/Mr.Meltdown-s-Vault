// Initialize Lucide icons
lucide.createIcons();

// Panic Button & Esc Key Logic
const handlePanic = () => {
  window.location.href = 'https://classroom.google.com';
};

document.getElementById('panicBtn').addEventListener('click', handlePanic);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === '`') {
    handlePanic();
  }
});

// Get game ID from URL
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');

const game = games.find(g => g.id === gameId);

if (!game) {
  window.location.href = 'index.html';
} else {
  // Set up the page
  document.title = `${game.title} - Mr.Meltdown's Vault`;
  document.getElementById('gameTitle').textContent = game.title;
  
  const iframe = document.getElementById('game-iframe');
  iframe.src = game.url;
  iframe.title = game.title;
  
  const newTabBtn = document.getElementById('newTabBtn');
  if (newTabBtn) {
    newTabBtn.href = game.url;
  }
}

// Fullscreen logic
const fullscreenBtn = document.getElementById('fullscreenBtn');
const fullscreenText = document.getElementById('fullscreenText');
const iframe = document.getElementById('game-iframe');

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    iframe.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    fullscreenText.textContent = 'Exit';
  } else {
    fullscreenText.textContent = 'Fullscreen';
  }
});
