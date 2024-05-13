import config from "../../config.js"
import storage from "../../../helpers/storage.js"
import displayError from "../../../helpers/displayError.js"

export default async function getProfile(name) {

    try {
        const token = storage.get("token")
        const url = config.BaseURL + "auction/profiles/"+name
    
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": config.APIKey,
            }
        })

        if (!response.ok) {
            const data = await response.json();

            if (data.errors) {
                displayError(data.errors[0].message)
            } 
            throw new Error(data);
        }
    
        const data = await response.json();
    
        if (data) {
            return data.data;   
        }
    } catch(err) {
        console.error(err);
    }
    
}