import loggedIn from "./loggedIn.js";
import loggedOut from "./loggedOut.js";
import storage from "../../helpers/storage.js";
import seePassword from "./seePassword.js";

export default function header() {
    const header = document.querySelector("#header-login")
    header.innerHTML = ""

    const profile = storage.get("profile");

    profile ? loggedIn(header, profile.name)  : loggedOut(header);
}

seePassword();
