import loggedIn from "./loggedIn.js";
import loggedOut from "./loggedOut.js";
import storage from "../../helpers/storage.js";
import seePassword from "./seePassword.js";
import modalToggle from "../../helpers/modalToggle.js";

const createNewListing = document.querySelector("#createNewListing");
const startSellingBtn = document.querySelector("#startSellingBtn");

const toNewListing = (e) => {
    e.preventDefault();
    const profile = storage.get("profile");
    if(!profile) {
        modalToggle();
        return;
    }
    else window.location.href = `/pages/newListing/`
}

createNewListing.addEventListener("click", toNewListing);
startSellingBtn?.addEventListener("click", toNewListing);

export default function header() {
    const header = document.querySelector("#header-login")
    header.innerHTML = ""

    const profile = storage.get("profile");

    profile ? loggedIn(header, profile.name)  : loggedOut(header);
}

seePassword();


