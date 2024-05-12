import header from "../templates/header/index.js";
import loginListen from "../api/listeners/login.js";

export default function init() {
    header() 
    loginListen()
}