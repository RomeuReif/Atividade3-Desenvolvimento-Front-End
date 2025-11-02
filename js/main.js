import { initSPA } from "./spa";

import (initSPA)

initSPA();

//menu hamburgue
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
}