if (localStorage.getItem("tabIcon")) {
    document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem("tabIcon")
}

if (localStorage.getItem("tabName")) {
    document.title = localStorage.getItem("tabName")
}
