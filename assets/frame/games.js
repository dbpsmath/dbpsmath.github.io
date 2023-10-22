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
    }
  ]
  var customgames = getObj("customgames")
  if (customgames) customgames.forEach(game => {
    games.push(game)
  })
  
  console.log("Loaded " + games.length + " games")
  if (customgames) console.log("Loaded " + customgames.length + " custom games")