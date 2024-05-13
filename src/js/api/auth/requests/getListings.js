import config from "../../config.js";
import displayError from "../../../helpers/displayError.js"

export default async function getListings(id = "") {

    try {
        const url = config.BaseURL + `auction/listings/${id}?_bids=true&_seller=true`

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Noroff-API-Key": config.APIKey
            },
        })

        if (!response.ok) {
            const data = await response.json();

            if (data.errors) {
                displayError(data.errors[0].message)
            } 
            throw new Error(data);
        }
            
        const data = await response.json()

        return data;
    } catch(err) {
        console.error(err);
    }
}
