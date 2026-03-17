const games = [
  {
    id: '2048',
    title: '2048',
    url: 'https://play2048.co/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/512px-2048_logo.svg.png',
    category: 'Puzzle'
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    url: 'https://flappybird.io/',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png',
    category: 'Arcade'
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Cookie_Clicker_icon.png',
    category: 'Clicker'
  },
  {
    id: 'slither-io',
    title: 'Slither.io',
    url: 'https://slither.io/',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/41/Slither.io_logo.png',
    category: 'Multiplayer'
  },
  {
    id: 'krunker',
    title: 'Krunker.io',
    url: 'https://krunker.io/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Krunker.io_logo.png/220px-Krunker.io_logo.png',
    category: 'Shooter'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    url: 'https://tetris.com/play-tetris',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tetrominoes_IJLO_STZ_Clear.svg/1200px-Tetrominoes_IJLO_STZ_Clear.svg.png',
    category: 'Puzzle'
  },
  {
    id: 'agar-io',
    title: 'Agar.io',
    url: 'https://agar.io/',
    image: 'https://picsum.photos/seed/agario/200/200',
    category: 'Multiplayer'
  },
  {
    id: 'skribbl-io',
    title: 'Skribbl.io',
    url: 'https://skribbl.io/',
    image: 'https://picsum.photos/seed/skribbl/200/200',
    category: 'Party'
  },
  {
    id: '1v1-lol',
    title: '1v1.lol',
    url: 'https://1v1.lol/',
    image: 'https://picsum.photos/seed/1v1lol/200/200',
    category: 'Shooter'
  },
  {
    id: 'shell-shockers',
    title: 'Shell Shockers',
    url: 'https://shellshock.io/',
    image: 'https://picsum.photos/seed/shellshockers/200/200',
    category: 'Shooter'
  },
  {
    id: 'zombs-royale',
    title: 'Zombs Royale',
    url: 'https://zombsroyale.io/',
    image: 'https://picsum.photos/seed/zombsroyale/200/200',
    category: 'Battle Royale'
  },
  {
    id: 'diep-io',
    title: 'Diep.io',
    url: 'https://diep.io/',
    image: 'https://picsum.photos/seed/diepio/200/200',
    category: 'Multiplayer'
  },
  {
    id: 'hole-io',
    title: 'Hole.io',
    url: 'https://hole-io.com/',
    image: 'https://picsum.photos/seed/holeio/200/200',
    category: 'Multiplayer'
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    url: 'https://paper-io.com/',
    image: 'https://picsum.photos/seed/paperio2/200/200',
    category: 'Multiplayer'
  },
  {
    id: 'wordle',
    title: 'Wordle',
    url: 'https://www.nytimes.com/games/wordle/index.html',
    image: 'https://picsum.photos/seed/wordle/200/200',
    category: 'Puzzle'
  },
  {
    id: 'geoguessr',
    title: 'GeoGuessr',
    url: 'https://www.geoguessr.com/',
    image: 'https://picsum.photos/seed/geoguessr/200/200',
    category: 'Trivia'
  },
  {
    id: 'chess-com',
    title: 'Chess.com',
    url: 'https://www.chess.com/play/computer',
    image: 'https://picsum.photos/seed/chesscom/200/200',
    category: 'Board'
  },
  {
    id: 'lichess',
    title: 'Lichess',
    url: 'https://lichess.org/',
    image: 'https://picsum.photos/seed/lichess/200/200',
    category: 'Board'
  },
  {
    id: 'monkeytype',
    title: 'Monkeytype',
    url: 'https://monkeytype.com/',
    image: 'https://picsum.photos/seed/monkeytype/200/200',
    category: 'Typing'
  },
  {
    id: 'typingclub',
    title: 'TypingClub',
    url: 'https://www.typingclub.com/',
    image: 'https://picsum.photos/seed/typingclub/200/200',
    category: 'Typing'
  },
  {
    id: 'fireboy-watergirl',
    title: 'Fireboy & Watergirl',
    url: 'https://www.fireboynwatergirl.com/',
    image: 'https://picsum.photos/seed/fireboywatergirl/200/200',
    category: 'Platformer'
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    url: 'https://poki.com/en/g/moto-x3m',
    image: 'https://picsum.photos/seed/motox3m/200/200',
    category: 'Racing'
  },
  {
    id: 'stickman-hook',
    title: 'Stickman Hook',
    url: 'https://poki.com/en/g/stickman-hook',
    image: 'https://picsum.photos/seed/stickmanhook/200/200',
    category: 'Arcade'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://slopegame.io/',
    image: 'https://picsum.photos/seed/slope/200/200',
    category: 'Arcade'
  },
  {
    id: 'run-3',
    title: 'Run 3',
    url: 'https://run3.io/',
    image: 'https://picsum.photos/seed/run3/200/200',
    category: 'Platformer'
  },
  {
    id: 'smash-karts',
    title: 'Smash Karts',
    url: 'https://smashkarts.io/',
    image: 'https://picsum.photos/seed/smashkarts/200/200',
    category: 'Racing'
  },
  {
    id: 'ev-io',
    title: 'Ev.io',
    url: 'https://ev.io/',
    image: 'https://picsum.photos/seed/evio/200/200',
    category: 'Shooter'
  },
  {
    id: 'venge-io',
    title: 'Venge.io',
    url: 'https://venge.io/',
    image: 'https://picsum.photos/seed/vengeio/200/200',
    category: 'Shooter'
  },
  {
    id: 'kour-io',
    title: 'Kour.io',
    url: 'https://kour.io/',
    image: 'https://picsum.photos/seed/kourio/200/200',
    category: 'Shooter'
  },
  {
    id: 'gartic-phone',
    title: 'Gartic Phone',
    url: 'https://garticphone.com/',
    image: 'https://picsum.photos/seed/garticphone/200/200',
    category: 'Party'
  },
  {
    id: 'pokemon-showdown',
    title: 'Pokémon Showdown',
    url: 'https://pokemonshowdown.com/',
    image: 'https://picsum.photos/seed/pokemonshowdown/200/200',
    category: 'Strategy'
  },
  {
    id: 'little-alchemy-2',
    title: 'Little Alchemy 2',
    url: 'https://littlealchemy2.com/',
    image: 'https://picsum.photos/seed/littlealchemy2/200/200',
    category: 'Puzzle'
  },
  {
    id: 'uno-online',
    title: 'UNO Online',
    url: 'https://poki.com/en/g/uno-online',
    image: 'https://picsum.photos/seed/unoonline/200/200',
    category: 'Card'
  },
  {
    id: 'codenames',
    title: 'Codenames',
    url: 'https://codenames.game/',
    image: 'https://picsum.photos/seed/codenames/200/200',
    category: 'Party'
  },
  {
    id: 'town-of-salem',
    title: 'Town of Salem',
    url: 'https://www.blankmediagames.com/TownOfSalem/',
    image: 'https://picsum.photos/seed/townofsalem/200/200',
    category: 'Strategy'
  },
  {
    id: 'pac-man',
    title: 'Pac-Man',
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    image: 'https://picsum.photos/seed/pacman/200/200',
    category: 'Arcade'
  },
  {
    id: 'snake',
    title: 'Google Snake',
    url: 'https://www.google.com/search?q=play+snake',
    image: 'https://picsum.photos/seed/googlesnake/200/200',
    category: 'Arcade'
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    url: 'https://minesweeperonline.com/',
    image: 'https://picsum.photos/seed/minesweeper/200/200',
    category: 'Puzzle'
  },
  {
    id: 'solitaire',
    title: 'Solitaire',
    url: 'https://www.google.com/search?q=play+solitaire',
    image: 'https://picsum.photos/seed/solitaire/200/200',
    category: 'Card'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    url: 'https://sudoku.com/',
    image: 'https://picsum.photos/seed/sudoku/200/200',
    category: 'Puzzle'
  },
  {
    id: 'mahjong',
    title: 'Mahjong',
    url: 'https://mahjong.com/',
    image: 'https://picsum.photos/seed/mahjong/200/200',
    category: 'Puzzle'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    url: 'https://www.google.com/search?q=tic+tac+toe',
    image: 'https://picsum.photos/seed/tictactoe/200/200',
    category: 'Board'
  },
  {
    id: 'connect-4',
    title: 'Connect 4',
    url: 'https://c4arena.com/',
    image: 'https://picsum.photos/seed/connect4/200/200',
    category: 'Board'
  },
  {
    id: 'checkers',
    title: 'Checkers',
    url: 'https://www.247checkers.com/',
    image: 'https://picsum.photos/seed/checkers/200/200',
    category: 'Board'
  },
  {
    id: 'reversi',
    title: 'Reversi',
    url: 'https://www.mathsisfun.com/games/reversi.html',
    image: 'https://picsum.photos/seed/reversi/200/200',
    category: 'Board'
  },
  {
    id: 'battleship',
    title: 'Battleship',
    url: 'https://battleship-game.org/',
    image: 'https://picsum.photos/seed/battleship/200/200',
    category: 'Board'
  },
  {
    id: 'super-mario-bros',
    title: 'Super Mario Bros',
    url: 'https://supermarioemulator.com/mario.php',
    image: 'https://picsum.photos/seed/supermariobros/200/200',
    category: 'Platformer'
  },
  {
    id: 'sonic-the-hedgehog',
    title: 'Sonic the Hedgehog',
    url: 'https://ssega.com/play/sonic-the-hedgehog/133',
    image: 'https://picsum.photos/seed/sonicthehedgehog/200/200',
    category: 'Platformer'
  },
  {
    id: 'doom',
    title: 'Doom',
    url: 'https://dos.zone/doom/',
    image: 'https://picsum.photos/seed/doom/200/200',
    category: 'Shooter'
  },
  {
    id: 'quake',
    title: 'Quake',
    url: 'http://www.quakejs.com/',
    image: 'https://picsum.photos/seed/quake/200/200',
    category: 'Shooter'
  },
  {
    id: 'wolfenstein-3d',
    title: 'Wolfenstein 3D',
    url: 'https://wolf3d.net/',
    image: 'https://picsum.photos/seed/wolfenstein3d/200/200',
    category: 'Shooter'
  },
  {
    id: 'prince-of-persia',
    title: 'Prince of Persia',
    url: 'https://princejs.com/',
    image: 'https://picsum.photos/seed/princeofpersia/200/200',
    category: 'Platformer'
  },
  {
    id: 'happy-wheels',
    title: 'Happy Wheels',
    url: 'https://totaljerkface.com/happy_wheels.tjf',
    image: 'https://picsum.photos/seed/happywheels/200/200',
    category: 'Racing'
  },
  {
    id: 'super-smash-flash-2',
    title: 'Super Smash Flash 2',
    url: 'https://www.mcleodgaming.com/games/ssf2',
    image: 'https://picsum.photos/seed/supersmashflash2/200/200',
    category: 'Fighting'
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    url: 'https://geometrydash.io/',
    image: 'https://picsum.photos/seed/geometrydash/200/200',
    category: 'Platformer'
  },
  {
    id: 'among-us',
    title: 'Among Us',
    url: 'https://amongusplay.online/',
    image: 'https://picsum.photos/seed/amongus/200/200',
    category: 'Multiplayer'
  }
];
