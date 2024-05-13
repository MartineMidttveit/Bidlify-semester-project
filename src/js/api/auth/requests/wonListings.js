import config from "../../config.js";
import storage from "../../../helpers/storage.js";

export default async function getUserListings(name) {

    try {
        const url = config.BaseURL + `auction/profiles/${name}/wins?_bids=true&_seller=true`;

        const token = storage.get("token")
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": config.APIKey,

            },
        });

        if (!response.ok) {
            const data = await response.json();

            if (data.errors) {
                displayError(data.errors[0].message)
            } 
            throw new Error(data);
        }

        const data = await response.json();

        return data;
    } catch(err) {
        console.error(err);
    }
}
    