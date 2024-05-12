import createElement from "../../helpers/createElement.js";
import modalToggle from "../../helpers/modalToggle.js";

export default function loggedOut(container) {
    const registerBtn = createElement("a", "font-semibold hover:text-secondary duration-100", "Register");
    registerBtn.href = "/pages/register/"
    const span = createElement("span", null, "or");
    const loginBtn = createElement("button", "border px-6 py-3 rounded hover:bg-secondary hover:border-secondary duration-300", "Log in");
    loginBtn.id = "openLogin";

    closeBtn.addEventListener("click", modalToggle)
    modalCancel.addEventListener("click", modalToggle)
    loginBtn.addEventListener("click", modalToggle)

    container.append(registerBtn, span, loginBtn)
}

