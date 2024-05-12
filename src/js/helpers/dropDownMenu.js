import closeElement from "./closeElement.js";
import createElement from "./createElement.js";

export default function dropDownBtn() {
    const headerProfile = document.querySelector("#header-login");

    const dropDown = document.querySelector("#dropDown");
    
    const iconDropDownBtn = document.querySelector(".fa-chevron-down");
    const iconHamburger = document.querySelector(".menu-mobile");

    dropDown.classList.toggle("show");
    iconDropDownBtn.classList.toggle("rotate-drop-down-icon");
    iconHamburger.classList.toggle('activated');

    closeElement(headerProfile, dropDown);
}