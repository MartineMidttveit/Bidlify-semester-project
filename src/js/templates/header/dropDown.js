import createElement from "../../helpers/createElement.js";
import storage from "../../helpers/storage.js";
import header from "./index.js";

export default function dropDown(profile) {

    const dropDownMenu = createElement('div', 'mx-auto absolute top-[75px] lg:top-[105px] xl:top-[120px] opacity-0');
    dropDownMenu.id = "dropDown";

    const userInfo = createElement('div', 'bg-light w-80 border rounded-lg p-10 flex flex-col lg:mr-4 xl:mr-16');
    const avatarContainer = createElement('div', 'flex items-center gap-6 border-b mb-6');

    const profileAvatar = createElement('img', 'mb-4 h-14 w-14 rounded-full object-cover');
   
    profileAvatar.src = profile.avatar.url;
    profileAvatar.alt = profile.avatar.alt;

    const userNameCredits = createElement('div', 'mb-4');

    const helloMessage = createElement('p', 'font-medium', `Hello, ${profile.name}`);

    const userCreditsValue = createElement('span','', profile.credits)

    const userCredits = createElement('p', 'flex gap-3 text-sm', `Credits: `);

    const navigation = createElement('div', 'flex flex-col gap-3 border-b');

    const newListing = createElement('a', 'xl:hidden hover:font-medium duration-100 cursor-pointer', 'New Listing');
    newListing.href = "/pages/newListing";

    const auctions = createElement('a', 'xl:hidden hover:font-medium duration-100 cursor-pointer', 'Auctions');
    auctions.href = "/pages/auctions";

    const about = createElement('p', 'mb-6 xl:hidden hover:font-medium duration-100 xl:mb-0', 'About');

    const yourProfile = createElement('a', 'hover:font-medium duration-100 cursor-pointer', 'Your profile');
    yourProfile.href = "/pages/profile";

    const messages = createElement('p', 'flex justify-between items-center hover:font-medium duration-100 xl:mb-6', 'Messages');
    const messagesCount = createElement('p', 'bg-secondary text-sm px-1.5 py-1 rounded', '3');

    messages.append(messagesCount);

    const navigation2 = createElement('div', 'mt-6 flex flex-col items-start gap-4');

    const support = createElement('p', "hover:font-medium duration-100", 'Support');
    const logOutBtn = createElement('button', 'hover:font-medium duration-100 cursor-pointer', 'Log out');
    logOutBtn.id = 'logOutBtn';

    logOutBtn.addEventListener("click", (e) => {
        e.preventDefault()
        storage.clear()
        header()
        window.location.href = "/index.html";
    })

    userCredits.append(userCreditsValue);
    navigation2.append(support, logOutBtn);
    navigation.append(yourProfile, messages, newListing, auctions, about);
    userNameCredits.append(helloMessage, userCredits);
    avatarContainer.append(profileAvatar, userNameCredits);
    userInfo.append(avatarContainer, navigation, navigation2);
    dropDownMenu.appendChild(userInfo);

    return dropDownMenu;
}