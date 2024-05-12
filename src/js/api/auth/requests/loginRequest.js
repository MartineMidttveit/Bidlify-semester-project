import config from "../../config.js";
import storage from "../../../helpers/storage.js";
import modalToggle from "../../../helpers/modalToggle.js";
import header from "../../../templates/header/index.js";

export default async function loginRequest(body) {

    const url = config.BaseURL + "auth/login"
   
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            const data = await response.json();
    
            if (data.errors) {
                const container = document.querySelector(".login-error")
                container.textContent = data.errors[0].message
                container.classList.remove("hidden")
                setTimeout(() => container.classList.add("hidden"), 5000)

                return [null, data.errors[0].message];
            }
    
            throw new Error(data);
          }

        const data = await response.json()

        if(data) {
            const {accessToken, ...profile} = data.data;
            storage.save("token", accessToken)
            storage.save("profile", profile)
            modalToggle()
            header()
        }
        return data;

    } 
    catch (error) {
        console.log(error)
    }
}

