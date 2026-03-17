const https = require('https');
const fs = require('fs');

const games = JSON.parse(fs.readFileSync('games_output.json', 'utf8')).slice(0, 5);

async function fetchIframe(game) {
  return new Promise((resolve) => {
    https.get(game.url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const regex = /<iframe[^>]*src="([^"]+)"/i;
        const match = regex.exec(data);
        if (match) {
          game.url = match[1];
        }
        resolve(game);
      });
    }).on('error', () => resolve(game));
  });
}

async function run() {
  const updatedGames = [];
  for (const game of games) {
    updatedGames.push(await fetchIframe(game));
  }
  console.log(JSON.stringify(updatedGames, null, 2));
}

run();
