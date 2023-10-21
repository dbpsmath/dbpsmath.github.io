var games = [
    {
      id: 'cookieclicker',
      title: 'Cookie Clicker',
      description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/',
      image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
    },
    {
      id: '2048',
      title: '2048',
      url: 'https://' + document.location.host + '/' + 'assets/gxmes/2048/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
    }
  ]
  var customgames = getObj("customgames")
  if (customgames) customgames.forEach(game => {
    games.push(game)
  })
  
  console.log("Loaded " + games.length + " games")
  if (customgames) console.log("Loaded " + customgames.length + " custom games")