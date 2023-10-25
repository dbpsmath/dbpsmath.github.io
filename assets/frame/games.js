var games = [
    {
      id: 'cookieclicker',
      title: 'Cookie Clicker',
      description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/',
      image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
    },
    {
      id: 'run2',
      title: 'Run 2',
      description: 'Play Run 2, the Coolmath Games title that requires tremendous concentration and memorization as you run (or skate) through the 3-dimensional courses.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/run2/',
      image: 'assets/gxmes/run2/Run2.jpg'
    },
    {
      id: 'ducklife4',
      title: 'Duck Life 4',
      description: 'Duck Life 4 is one of the newest and most fun games in the series. Feed your duck and attain accessories to train them to be the best that they can be.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ducklife4',
      image: 'https://' + document.location.host + '/assets/gxmes/ducklife4/splash.jpg'
    },
    {
      id: '2048',
      title: '2048',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/2048/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
    },
    {
      id: 'ltf2',
      title: 'Learn To Fly 2',
      description: 'Learn to Fly 2 is a free arcade game about sending a penguin flying and earning medals. Thanks to the most advanced engineering in the world, your penguin will start making rickety makeshift gadgets in Antarctica. Send him down a long ramp and then watch him soar, fly and glide through the air.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ltf2/',
      image: 'assets/gxmes/ltf2/gameicon.png'
    },
    {
      id: 'ltf',
      title: 'Learn To Fly',
      description: 'Learn to Fly is a free arcade game about sending a penguin flying and earning medals. Thanks to the most advanced engineering in the world, your penguin will start making rickety makeshift gadgets in Antarctica. Send him down a long ramp and then watch him soar, fly and glide through the air.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ltf/',
      image: 'assets/gxmes/ltf/gameicon.png'
    },
    {
      id: 'retro',
      title: 'Retro Bowl',
      description: 'Can you pass the grade and take your team all the way to the ultimate prize? Can you win the Retro Bowl?',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/retrobowl/',
      image: 'assets/gxmes/retrobowl/img/icon.jpg'
    },
    {
      id: 'eggy',
      title: 'Eggy Car',
      description: 'Eggy is not wearing a seatbelt! Try your best not to scramble him!',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/eggycar/',
      image: 'assets/gxmes/eggycar/gameicon.png'
    },
    {
      id: 'snowrider',
      title: 'Snow Rider 3D',
      description: 'Snow Rider 3D is a .io game. Snow Rider 3D is designed based on the idea to bring Christmas all year round. This game gives you an opportunity to slide down a giant slope',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/snowrider3d/',
      image: 'assets/gxmes/snowrider3d/gameicon.png'
    },
    {
      id: 'ducklife1',
      title: 'Duck Life 1',
      description: 'Duck Life 1 is a funny running game. Your mission is to control a duckling to run, swim and fly to reach the finish line to earn as many coins as possible.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ducklife1/',
      image: 'assets/gxmes/ducklife1/ducklife.png'
    },
    {
      id: 'ducklife2',
      title: 'Duck Life 2',
      description: 'Duck Life 2 is a funny running game. Your mission is to control a duckling to run, swim and fly to reach the finish line to earn as many coins as possible.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ducklife2/',
      image: 'assets/gxmes/ducklife2/ducklife2.png'
    },
    {
      id: 'ducklife3',
      title: 'Duck Life 3: Evolution',
      description: 'Duck Life 3 is a funny running game. Your mission is to control a duckling to run, swim and fly to reach the finish line to earn as many coins as possible.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ducklife3/',
      image: 'assets/gxmes/ducklife3/duck.png'
    },
    {
      id: 'smashkarts',
      title: 'Smash Karts',
      description: 'Smash Karts is a free io Multiplayer Kart Battle Arena game. Drive fast. Fire rockets. Make big explosions.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/smashkarts/',
      image: 'assets/gxmes/smashkarts/gameicon.png'
    },
    {
      id: 'subway',
      title: 'Subway Surfers',
      description: 'Subway Surfers is a classic endless runner game. You play as Jake, who surfs the subways and tries to escape from the grumpy Inspector and his dog. Youll need to dodge trains, trams, obstacles, and more to go as far as you can in this endless running game. Collect coins to unlock power-ups and special gear',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/subway-surfers/',
      image: 'assets/gxmes/subway-surfers/gameicon.png'
    },
    {
      id: 'doge',
      title: 'Doge Miner',
      description: 'Mines into the future where infinite dogecoins exist. Buy! How to mine dogecoins? Find out in Dogeminer: The Dogecoin Mining Simulator. Very wow. To the moon!',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/dogeminer/',
      image: 'assets/gxmes/dogeminer/gameicon.png'
    },
    {
      id: 'doge2',
      title: 'Doge Miner 2',
      description: 'A space-travel, rock-crusher, free clicker adventure game. Build such mining operation, get much dogecoins. Hire many help to increase dogecoin per second, improve stats like +wow by finding loot and more. Buy Space Rockets to reach the moon and beyond. Play here.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/dogeminer2/',
      image: 'assets/gxmes/dogeminer2/gameicon.png'
    },
    {
      id: 'flappy',
      title: 'Flappy Bird',
      description: 'Flappy Bird is a mobile game developed by the Vietnamese video game artist and programmer Dong Nguyen, under his game development company.Gears. The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/flappybird/',
      image: 'assets/gxmes/flappybird/flappy.png'
    },
    {
      id: 'monkeymart',
      title: 'MonkeyMart',
      description: 'Monkey Mart is an idle/management game where you control a cute monkey character who is in charge of a supermarket. Plant fruits, harvest produce, move around from station to station to fill the stands with various food items. Sell bananas, corn, eggs, peanuts, coffee beans, chocolate, wheat etc..',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/monkeymart/',
      image: 'assets/gxmes/monkeymart/gameicon.png'
    },
    {
      id: 'ovo',
      title: 'OvO',
      description: 'OvO.io Online is the same as the OvO game you know and love, but now in multiplayer! This is a fast-paced skill-based platforming game focused on maneuvering around the levels as fast as possible. Complete every level available in easy and hard mode.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ovo/',
      image: 'assets/gxmes/ovo/gameicon.png'
    },
    {
      id: 'duckspace',
      title: 'Duck Life Space',
      description: 'Duck Life: Space is a duck racing game with a galactic story and theme. An alien from outer space has nabbed your trophy, and you need to go on a quest through space to get it back! Enjoy a plethora of new mini-games and races along the way.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ducklifespace/duck5/',
      image: 'assets/gxmes/ducklifespace/gameicon.png'
    },
    {
      id: 'ovo2',
      title: 'OvO 2',
      description: 'OvO 2 is an exciting and immersive video game that takes players on a thrilling journey through a captivating virtual world. This sequel to the original OvO',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/ovo2/',
      image: 'assets/gxmes/ovo2/gameicon.png'
    },
    {
      id: 'cookie',
      title: 'Cookie Clicker',
      description: 'Cookie Clicker is a 2013 incremental game created by French programmer Julien "Orteil" Thiennot. The user initially clicks on a big cookie on the screen, earning a single cookie per click. ',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/cookie-clicker/',
      image: 'assets/gxmes/cookie-clicker/gameicon.png'
    },
    {
      id: '10min',
      title: '10 Minutes Till Dawn',
      description: 'In this roguelite survival game, select from a variety of upgrades to create a unique and overpowered builds every run.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/10-minutes-till-dawn/',
      image: 'assets/gxmes/10-minutes-till-dawn/gameicon.png'
    },
    {
      id: 'slope',
      title: 'Slope',
      description: 'Play Slope Game, an endless space run game. Drive a ball in the 3D running game in Slope Game. Easy to controls, high speed, and addictive gameplay.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/slope/',
      image: 'assets/gxmes/slope/gameicon.png'
    },
    {
      id: 'slope2',
      title: 'Slope 2',
      description: 'Slope 2 is one of the most exciting endless run games. Control your ball in a high-speed slope race and see how far you can go, be the top on the leader board',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/slope-2/',
      image: 'assets/gxmes/slope-2/gameicon.png'
    },
    {
      id: 'slopeball',
      title: 'Slope Ball',
      description: 'Slope Ball is a fun running game for singleplayer. Your task is to jump over the obstacles and reach the destination to move on to the next level.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/slope-2/',
      image: 'assets/gxmes/slope-ball/gameicon.png'
    },
    {
      id: 'drivemad',
      title: 'Drive Mad',
      description: 'Drive Mad is a car game where you drive on a track filled with obstacles. Your aim is to reach the finish line in one piece. You have to balance your speed so your car doesnt flip over. This is harder than it sounds, as there are many thrilling and creative stunts and obstacles for you to enjoy.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/drive-mad/',
      image: 'assets/gxmes/drive-mad/gameicon.png'
    },
    {
      id: '1v1lol',
      title: '1v1 Lol',
      description: 'Discover 1v1, the online building simulator & third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/1v1lol/',
      image: 'assets/gxmes/1v1lol/gameicon.png'
    },
    {
      id: 'jetpack',
      title: 'Jetpack Joyride',
      description: 'Jetpack Joyride is a 2011 side-scrolling endless runner action video game created by Halfbrick Studios. It was released for iOS devices on the App Store on September 1, 2011 and has been ported to other systems.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/jetpack-joyride/',
      image: 'assets/gxmes/jetpack-joyride/gameicon.png'
    },
    {
      id: '1',
      title: '1',
      description: 'Experience the opposite of 2048 in this fun parody game!',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/1/',
      image: 'assets/gxmes/1/gameicon.png'
    },
    {
      id: 'hexgl',
      title: 'HexGL',
      description: 'HexGL is a futuristic, fast-paced racing game built by Thibaut Despoulain using HTML5, Javascript and WebGL and a tribute to the original Wipeout and F-Zero series.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/hexgl/',
      image: 'assets/gxmes/hexgl/gameicon.png'
    },
    {
      id: 'goi',
      title: 'Getting Over It',
      description: 'Play Getting Over It with the Scratch Cat!',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/gettingoverit/',
      image: 'assets/gxmes/gettingoverit/splash.bmp'
    },
    {
      id: 'adr',
      title: 'A Dark Room',
      description: 'A Dark Room is an open-source text-based role-playing game. It was originally published for web browsers by Canadian indie studio Doublespeak Games on June 10, 2013. Later that year, it was released in the App Store for iOS devices.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/adarkroom/',
      image: 'assets/gxmes/adarkroom/adr.png'
    },
    {
      id: 'amongus',
      title: 'Among Us',
      description: 'Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/among-us/',
      image: 'assets/gxmes/among-us/amongus.png'
    },
    {
      id: 'gameinside',
      title: 'Game Inside a Game Inside a Game inside a Game',
      description: 'You wanna play a game? Lets play a game inside a game inside a game inside a game inside a game inside a game inside a game inside a game',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/game-inside/',
      image: 'assets/gxmes/game-inside/game-inside.png'
    },
    {
      id: 'bigred',
      title: 'Big Red Button',
      description: "Don't press it",
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/bigredbutton/',
      image: 'assets/gxmes/bigredbutton/bigredbutton.png'
    },  
]
