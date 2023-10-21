const params = new URLSearchParams(window.location.search)
if (params.get("game")) {
    games.forEach(async game => {
    if (game.id != params.get("game")) return
    document.title = `${game.title} | DBP's Math`
    document.querySelector("#gameImage").src = game.image
    document.querySelector("#gameTitle").innerHTML = game.title
    if (game.description) document.querySelector("#gameDescription").innerHTML = game.description
    document.querySelector("#frame").src = game.url

    
    })
}