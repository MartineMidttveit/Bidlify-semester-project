import createElement from "../../helpers/createElement.js";
import dropDown from "./dropDown.js";
import getProfile from "../../api/auth/requests/getProfile.js";
import dropDownMenu from '../../helpers/dropDownMenu.js';

export default async function loggedIn(container, name) {
    const profile = await getProfile(name);

    const headerLoggedIn = createHeaderLoggedIn(profile);
    const dropDownMenu = dropDown(profile);

    container.appendChild(headerLoggedIn);
    container.appendChild(dropDownMenu);
}

function createHeaderLoggedIn(profile) {
    const headerLoggedIn = createElement('div', 'w-full gap-2 items-center justify-end flex');
    headerLoggedIn.setAttribute("id", "headerLoggedIn");

    const creditsContainer = createElement('div', 'hidden xl:flex flex-col mr-3');
    const credits = createElement('p', 'text-right text-sm', 'Credits:');
    const userCredits = createElement('p', 'text-right text-sm font-medium', profile.credits);
    
    const dropDownContainer = createElement('div', 'relative h-12 w-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center');
    const layerBackground = createElement('div', 'h-12 w-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 cursor-pointer rounded-full object-cover absolute bg-black-opacity opacity-0 hover:opacity-100 duration-300');
    layerBackground.id = "profileDropDownBtn";

    layerBackground.addEventListener('click', dropDownMenu);

    const profileAvatar = createElement('img', 'h-12 w-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full object-cover');
    profileAvatar.src = profile.avatar.url;
    profileAvatar.alt = profile.avatar.alt;
    profileAvatar.setAttribute("id", "headerAvatar")

    const dropDownBtn = createElement('button', 'hidden absolute bottom-0 right-0 h-6 w-6 bg-light rounded-full border xl:flex items-center justify-center hover:bg-secondary hover:border-transparent duration-300');
    dropDownBtn.id = "dropDownBtn";

    dropDownBtn.addEventListener('click', dropDownMenu)

    const dropDownIcon = createElement('i', 'fa-solid fa-chevron-down text-xs duration-300');

    const notifications = createElement('div','h-12 w-12 md:w-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full xl:ml-2 flex items-center justify-center border hover:bg-secondary hover:border-transparent duration-300');
    const bellIcon = createElement('i', 'fa-solid fa-bell');

    const dropDownHamburger = createElement('div', 'xl:hidden ml-2 menu-mobile float-right select-none flex flex-col');
    const menuMobile = createElement('div', 'menu-hamburger');
    const menuMobileSpan1 = createElement('span', 'flex w-5 mb-1 relative bg-primary rounded-full h-[2px]');
    const menuMobileSpan2 = createElement('span', 'flex w-5 mb-1 relative bg-primary rounded-full h-[2px]');
    const menuMobileSpan3 = createElement('span', 'flex w-5 mb-1 relative bg-primary rounded-full h-[2px]');

    dropDownHamburger.addEventListener('click', dropDownMenu);

    dropDownBtn.appendChild(dropDownIcon);
    menuMobile.append(menuMobileSpan1, menuMobileSpan2, menuMobileSpan3);
    dropDownHamburger.append(menuMobile);
    notifications.append(bellIcon);
    dropDownContainer.append(layerBackground, profileAvatar, dropDownBtn);
    creditsContainer.append(credits, userCredits);
    headerLoggedIn.append(creditsContainer, dropDownContainer, notifications, dropDownHamburger);

    return headerLoggedIn;
}