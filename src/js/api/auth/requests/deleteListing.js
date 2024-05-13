import config from "../../config.js";
import storage from "../../../helpers/storage.js";
import displayError from "../../../helpers/displayError.js"

export default async function deleteListing(id) {

const token = storage.get("token")
const url = config.BaseURL + `auction/listings/${id}`

const response = await fetch(url, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": config.APIKey
    },
})

if (response.status === 204) {
    return response;
}

if (!response.ok) 
    displayError("Something went wrong. Could not delete listing.")
}