// Initialize Lucide icons
lucide.createIcons();

// Elements
const searchInput = document.getElementById('searchInput');
const gamesGrid = document.getElementById('gamesGrid');
const noResults = document.getElementById('noResults');
const searchQueryText = document.getElementById('searchQueryText');
const pageTitle = document.getElementById('pageTitle');
const gameCount = document.getElementById('gameCount');
const panicBtn = document.getElementById('panicBtn');

// Panic Button & Esc Key Logic
const handlePanic = () => {
  window.location.href = 'https://classroom.google.com';
};

panicBtn.addEventListener('click', handlePanic);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === '`') {
    handlePanic();
  }
});

// Cloak (about:blank) Logic
const cloakBtn = document.getElementById('cloakBtn');
if (cloakBtn) {
  cloakBtn.addEventListener('click', () => {
    let win = window.open('about:blank', '_blank');
    if (!win) {
      alert('Popup blocked! Please allow popups to use the Cloak feature.');
      return;
    }
    
    let doc = win.document;
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Google</title>
          <link rel="icon" href="https://www.google.com/favicon.ico">
          <style>
            body { margin: 0; padding: 0; overflow: hidden; background: #000; }
            iframe { width: 100vw; height: 100vh; border: none; }
          </style>
        </head>
        <body>
          <iframe src="${window.location.href}"></iframe>
        </body>
      </html>
    `);
    doc.close();
    
    // Redirect the original tab to look like you're doing work
    window.location.replace('https://classroom.google.com');
  });
}

// Render Games
function renderGames(query = '') {
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(query.toLowerCase()) ||
    game.category.toLowerCase().includes(query.toLowerCase())
  );

  gameCount.textContent = `${filteredGames.length} GAMES`;
  
  if (query) {
    pageTitle.textContent = 'Search Results';
  } else {
    pageTitle.textContent = 'Featured Games';
  }

  if (filteredGames.length > 0) {
    gamesGrid.innerHTML = filteredGames.map(game => `
      <a href="play.html?id=${game.id}" class="group relative flex flex-col bg-zinc-100 p-3 brutal-box even:rotate-1 odd:-rotate-1 hover:rotate-0 hover:z-10">
        <div class="aspect-square w-full overflow-hidden border-2 border-black bg-black relative">
          <img
            src="${game.image}"
            alt="${game.title}"
            class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
            referrerpolicy="no-referrer"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <div class="bg-fuchsia-500 text-black brutal-box rounded-full p-3 transform scale-50 group-hover:scale-100 transition-all">
              <i data-lucide="play" class="w-6 h-6 fill-current ml-1"></i>
            </div>
          </div>
        </div>
        <div class="pt-3 pb-1">
          <h3 class="font-bold text-black text-lg uppercase tracking-tight truncate">${game.title}</h3>
          <p class="text-sm text-fuchsia-600 font-bold uppercase tracking-wider">${game.category}</p>
        </div>
      </a>
    `).join('');
    
    gamesGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    // Re-initialize icons for newly added HTML
    lucide.createIcons();
  } else {
    gamesGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
    searchQueryText.textContent = query;
  }
}

// Initial render
renderGames();

// Search listener
searchInput.addEventListener('input', (e) => {
  renderGames(e.target.value);
});
