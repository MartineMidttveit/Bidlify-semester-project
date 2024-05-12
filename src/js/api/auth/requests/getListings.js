import config from "../../config.js";

export default async function getListings(id = "") {

const url = config.BaseURL + `auction/listings/${id}?_bids=true&_seller=true`

const response = await fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": config.APIKey
    },
})
    
const data = await response.json()

return data;
}