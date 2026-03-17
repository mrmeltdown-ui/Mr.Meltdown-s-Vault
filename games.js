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
    url: 'https://chvin.github.io/react-tetris/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tetrominoes_IJLO_STZ_Clear.svg/1200px-Tetrominoes_IJLO_STZ_Clear.svg.png',
    category: 'Puzzle'
  },
  {
    id: 'agar-io',
    title: 'Agar.io',
    url: 'https://agar.io/',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Agar.io_Icon.png',
    category: 'Multiplayer'
  },
  {
    id: 'skribbl-io',
    title: 'Skribbl.io',
    url: 'https://skribbl.io/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Skribbl.io_logo.png/220px-Skribbl.io_logo.png',
    category: 'Party'
  },
  {
    id: '1v1-lol',
    title: '1v1.lol',
    url: 'https://1v1.lol/',
    image: 'https://images.crazygames.com/games/1v1-lol/cover-1586284648719.png',
    category: 'Shooter'
  },
  {
    id: 'shell-shockers',
    title: 'Shell Shockers',
    url: 'https://shellshock.io/',
    image: 'https://images.crazygames.com/games/shell-shockers/cover-1593596738374.png',
    category: 'Shooter'
  },
  {
    id: 'zombs-royale',
    title: 'Zombs Royale',
    url: 'https://zombsroyale.io/',
    image: 'https://images.crazygames.com/games/zombs-royale/cover-1583232144000.png',
    category: 'Battle Royale'
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    url: 'https://paper-io.com/',
    image: 'https://images.crazygames.com/games/paper-io-2/cover-1583232144000.png',
    category: 'Multiplayer'
  },
  {
    id: 'hole-io',
    title: 'Hole.io',
    url: 'https://hole-io.com/',
    image: 'https://images.crazygames.com/games/hole-io/cover-1583232144000.png',
    category: 'Multiplayer'
  },
  {
    id: 'wordle',
    title: 'Wordle',
    url: 'https://wordlegame.org/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/220px-Wordle_196_example.svg.png',
    category: 'Puzzle'
  },
  {
    id: 'chess-com',
    title: 'Chess',
    url: 'https://lichess.org/tv/frame',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chess_Piece_King.svg/200px-Chess_Piece_King.svg.png',
    category: 'Board'
  },
  {
    id: 'monkeytype',
    title: 'Monkeytype',
    url: 'https://monkeytype.com/',
    image: 'https://images.crazygames.com/games/monkeytype/cover-1683709048381.png',
    category: 'Typing'
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    url: 'https://html5.gamedistribution.com/rvvASMiM/5c6b9062322340269f8e401e405a2717/',
    image: 'https://images.crazygames.com/games/moto-x3m/cover-1583232144000.png',
    category: 'Racing'
  },
  {
    id: 'stickman-hook',
    title: 'Stickman Hook',
    url: 'https://html5.gamedistribution.com/rvvASMiM/66f60a92032542a1993e0f9b37c0f135/',
    image: 'https://images.crazygames.com/games/stickman-hook/cover-1583232144000.png',
    category: 'Arcade'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://slopegame.io/',
    image: 'https://images.crazygames.com/games/slope/cover-1583232144000.png',
    category: 'Arcade'
  },
  {
    id: 'run-3',
    title: 'Run 3',
    url: 'https://player.mathgames.com/html5/run3/',
    image: 'https://images.crazygames.com/games/run-3/cover-1583232144000.png',
    category: 'Platformer'
  },
  {
    id: 'smash-karts',
    title: 'Smash Karts',
    url: 'https://smashkarts.io/',
    image: 'https://images.crazygames.com/games/smash-karts/cover-1583232144000.png',
    category: 'Racing'
  },
  {
    id: 'ev-io',
    title: 'Ev.io',
    url: 'https://ev.io/',
    image: 'https://images.crazygames.com/games/ev-io/cover-1610626353846.png',
    category: 'Shooter'
  },
  {
    id: 'venge-io',
    title: 'Venge.io',
    url: 'https://venge.io/',
    image: 'https://images.crazygames.com/games/venge-io/cover-1593596738374.png',
    category: 'Shooter'
  },
  {
    id: 'gartic-phone',
    title: 'Gartic Phone',
    url: 'https://garticphone.com/',
    image: 'https://images.crazygames.com/games/gartic-phone/cover-1620311244431.png',
    category: 'Party'
  },
  {
    id: 'pokemon-showdown',
    title: 'Pokémon Showdown',
    url: 'https://play.pokemonshowdown.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/200px-Pok%C3%A9_Ball_icon.svg.png',
    category: 'Strategy'
  },
  {
    id: 'little-alchemy-2',
    title: 'Little Alchemy 2',
    url: 'https://littlealchemy2.com/',
    image: 'https://images.crazygames.com/games/little-alchemy-2/cover-1583232144000.png',
    category: 'Puzzle'
  },
  {
    id: 'town-of-salem',
    title: 'Town of Salem',
    url: 'https://www.blankmediagames.com/TownOfSalem/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Town_of_Salem_logo.png/220px-Town_of_Salem_logo.png',
    category: 'Strategy'
  },
  {
    id: 'pac-man',
    title: 'Pac-Man',
    url: 'https://freepacman.org/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Pac-man.png/220px-Pac-man.png',
    category: 'Arcade'
  },
  {
    id: 'snake',
    title: 'Google Snake',
    url: 'https://playsnake.org/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Snake_game_icon.svg/200px-Snake_game_icon.svg.png',
    category: 'Arcade'
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    url: 'https://minesweeperonline.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Minesweeper_Icon.png/200px-Minesweeper_Icon.png',
    category: 'Puzzle'
  },
  {
    id: 'solitaire',
    title: 'Solitaire',
    url: 'https://www.solitr.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png',
    category: 'Card'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    url: 'https://sudoku.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png',
    category: 'Puzzle'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    url: 'https://playtictactoe.org/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/200px-Tic_tac_toe.svg.png',
    category: 'Board'
  },
  {
    id: 'checkers',
    title: 'Checkers',
    url: 'https://www.247checkers.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Draughts.svg/200px-Draughts.svg.png',
    category: 'Board'
  },
  {
    id: 'super-mario-bros',
    title: 'Super Mario Bros',
    url: 'https://supermarioemulator.com/mario.php',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Super_Mario_Bros._box.png/220px-Super_Mario_Bros._box.png',
    category: 'Platformer'
  },
  {
    id: 'sonic-the-hedgehog',
    title: 'Sonic the Hedgehog',
    url: 'https://ssega.com/play/sonic-the-hedgehog/133',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg/220px-Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
    category: 'Platformer'
  },
  {
    id: 'doom',
    title: 'Doom',
    url: 'https://dos.zone/doom/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Doom_cover_art.jpg/220px-Doom_cover_art.jpg',
    category: 'Shooter'
  },
  {
    id: 'quake',
    title: 'Quake',
    url: 'http://www.quakejs.com/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Quake_logo.svg/220px-Quake_logo.svg.png',
    category: 'Shooter'
  },
  {
    id: 'happy-wheels',
    title: 'Happy Wheels',
    url: 'https://totaljerkface.com/happy_wheels.tjf',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Happy_Wheels_logo.png/220px-Happy_Wheels_logo.png',
    category: 'Racing'
  },
  {
    id: 'super-smash-flash-2',
    title: 'Super Smash Flash 2',
    url: 'https://www.mcleodgaming.com/games/ssf2',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Super_Smash_Flash_2_logo.png/220px-Super_Smash_Flash_2_logo.png',
    category: 'Fighting'
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    url: 'https://geometrydash.io/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Geometry_Dash_Logo.png/220px-Geometry_Dash_Logo.png',
    category: 'Platformer'
  },
  {
    id: 'among-us',
    title: 'Among Us',
    url: 'https://amongusplay.online/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Among_Us_cover_art.jpg/220px-Among_Us_cover_art.jpg',
    category: 'Multiplayer'
  }
];
