import config from "../../config.js";
import storage from "../../../helpers/storage.js";
import displayError from "../../../helpers/displayError.js";

export default async function createNewListing(listingData) { 
    const url = config.BaseURL + "auction/listings";
    const token = storage.get("token")

    try {
        const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    "X-Noroff-API-Key": config.APIKey,
                },
                body: JSON.stringify(listingData),
            });

            if (!response.ok) {
                const data = await response.json();
        
                if (data.errors) {
                    displayError(data.errors[0].message)
                } 
        
                throw new Error(data);
              }
    
            const data = await response.json()

            if(data) {
                window.location.href = `/pages/listing/?id=${data.data.id}`
            }

            return data;
    } catch (err){
        console.error(err);
    }
}