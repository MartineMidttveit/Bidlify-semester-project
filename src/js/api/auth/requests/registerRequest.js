import config from "../../config.js";
import storage from "../../../helpers/storage.js";
import displayError from "../../../helpers/displayError.js";

export default async function registerRequest(body) {

    const url = config.BaseURL + "auth/register"
   
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        console.log(response)

        if (!response.ok) {
            const data = await response.json();
    
            if (data.errors) {
                displayError(data.errors[0].message)
            } 
            throw new Error(data);
          }

        const data = await response.json()

        if(data) {
            
    const loginUrl = config.BaseURL + "auth/login"
            const loginResponse = await fetch(loginUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(loginResponse)
            const loginData = await loginResponse.json()

            console.log(loginData)
            const {accessToken, ...profile} = loginData.data;
            storage.save("token", accessToken)
            storage.save("profile", profile)
            window.location.href ="/pages/profile/"

        }
        return data;

    } 
    catch (err) {
        console.error(err)
    }
}
