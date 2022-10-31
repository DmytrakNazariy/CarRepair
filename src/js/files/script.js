// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let tabHeader = document.querySelector('.tabs__navigation');
let tabIndicator = document.querySelector(".tabs__indicator");
let tabsPane = tabHeader.querySelectorAll("button");


for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabsPane[i].classList.add("_active");
    tabIndicator.style.left = `calc(calc(100% / ${tabsPane.length}) * ${i})`;
  });
}

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();