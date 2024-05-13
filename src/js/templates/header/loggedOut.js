import createElement from "../../helpers/createElement.js";
import modalToggle from "../../helpers/modalToggle.js";
import dropDownMenu from "../../helpers/dropDownMenu.js"

export default function loggedOut(container) {
    const registerBtn = createElement("a", "font-semibold hover:text-secondary duration-100 hidden xl:block", "Register");
    registerBtn.href = "/pages/register/"
    const span = createElement("span", "hidden xl:block", "or");
    const loginBtn = createElement("button", "border px-6 py-3 rounded hover:bg-secondary hover:border-secondary duration-300 hidden xl:block", "Log in");
    loginBtn.id = "openLogin";

    const dropDownHamburger = createElement('div', 'xl:hidden ml-2 float-right select-none flex flex-col menu-mobile');
    const menuMobile = createElement('div', 'menu-hamburger');
    const menuMobileSpan1 = createElement('span', 'flex w-5 mb-1 relative bg-primary rounded-full h-[2px]');
    const menuMobileSpan2 = createElement('span', 'flex w-5 mb-1 relative bg-primary rounded-full h-[2px]');
    const menuMobileSpan3 = createElement('span', 'flex w-5 mb-1 relative bg-primary rounded-full h-[2px]');

    const dropDownMenu = createElement('div', 'hidden mx-auto absolute top-[65px] lg:top-[80px] xl:top-[120px] bg-white border w-2/3 md:w-1/3 px-12 py-8 rounded');
    dropDownMenu.id = "dropDownMobile";

    const navigation = createElement('div', 'flex flex-col gap-3');

    const auctions = createElement('a', 'hover:font-medium duration-100 cursor-pointer', 'Auctions');
    auctions.href = "/pages/auctions";

    const about = createElement('p', 'hover:font-medium duration-100 xl:mb-0', 'About');

    const lineBreak = createElement("div", "border-b w-full my-2");

    const login = createElement('a', 'hover:font-medium duration-100 xl:mb-0', 'Login');
    login.addEventListener("click", () => {
        modalToggle()
    })

    const register = createElement('a', 'hover:font-medium duration-100', 'Register');
    register.href = "/pages/register/"

    dropDownHamburger.addEventListener('click', () => {
        dropDownMenu.classList.toggle("hidden");
    });

    dropDownMenu.append(navigation)
    navigation.append(auctions, about, lineBreak, login, register);
    menuMobile.append(menuMobileSpan1, menuMobileSpan2, menuMobileSpan3);
    dropDownHamburger.append(menuMobile);

    closeBtn.addEventListener("click", modalToggle)
    modalCancel.addEventListener("click", modalToggle)
    loginBtn.addEventListener("click", modalToggle)

    container.append(dropDownMenu, registerBtn, span, loginBtn, dropDownHamburger);
}

