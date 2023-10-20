localStorage.setItem('theme', 'modern')


if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
}
console.log(localStorage.getItem("theme"))
