/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

let toggleBtn = document.querySelector(".navbar_bars");
let toggleBtnIcon = document.querySelector(".navbar_bars i");
let dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    let isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
};
