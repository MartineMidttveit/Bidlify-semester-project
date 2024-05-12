import config from "../../config.js";
import storage from "../../../helpers/storage.js";

export default async function getProfileBids(name) {
    const url = config.BaseURL + `auction/profiles/${name}/bids?_listings=true`;

    const token = storage.get("token")
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": config.APIKey,

        },
    });

    const data = await response.json();

    return data;
}