// For Simplicity Sake
const lg = val => console.log(val)
const $S = selector => document.querySelector(selector)
const $All = selector => document.querySelectorAll(selector)
const html = document.documentElement



// Debug CSS
const toggleCSSDebug = _ => {
    html.classList.toggle("debug");
}



// Change Theme On The Spot
const toggleDarkMode = _ => {
    if (!html.getAttribute("data-theme") || html.getAttribute("data-theme") == "light") {
        html.setAttribute("data-theme", "dark")
    }
    else {
        html.setAttribute("data-theme", "light")
    }   
}
