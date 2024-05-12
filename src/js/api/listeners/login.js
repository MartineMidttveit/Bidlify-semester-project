import loginRequest from "../auth/requests/loginRequest.js"

const loginForm = document.querySelector("#login-form")
    export default function loginListen() {

    loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = loginForm.querySelector("#email").value
    const password = loginForm.querySelector("#password").value

    loginRequest({email, password})
    })
}