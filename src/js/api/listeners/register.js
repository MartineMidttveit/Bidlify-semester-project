import registerRequest from "../auth/requests/registerRequest.js"
import liveUpdate from "../../helpers/liveUpdate.js"
import seePassword from "../../templates/header/seePassword.js"

seePassword();

const registerImage = document.querySelector("#registerImage");
const registerForm = document.querySelector("#registrationForm")
const avatarInput = document.querySelector("#createAvatar")

    export default function register() {

    liveUpdate(registerImage, avatarInput)
    registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const body = {
     name: registerForm.querySelector("#name").value,
     email: registerForm.querySelector("#email").value,
     password: registerForm.querySelector("#password").value, 
}


let avatar = avatarInput.value
if (avatar && avatar !== "") {
    body.avatar = {url: avatar, alt: "Bidlify img"}

}

    registerRequest(body)
    })
}

