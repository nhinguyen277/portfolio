let toggle = document.querySelector(".menu-toggle");
toggle.onclick = toggleMenu;

function toggleMenu() {
    let menu = document.querySelector("#main-navigation .menu");
    menu.classList.toggle("show-small"); //toggle the .show-small class on and off
}