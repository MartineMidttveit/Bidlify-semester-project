import config from "../../config.js"
import storage from "../../../helpers/storage.js"
import createElement from "../../../helpers/createElement.js"

export default async function postBid(id, body) {
    const url = `${config.BaseURL}auction/listings/${id}/bids/?_seller=true`

    const token = storage.get("token")
   
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": config.APIKey,
        },
        body: JSON.stringify(body)
    } )

    const data = await response.json()

  if (data.errors) {
    const errorContainer = document.querySelector("#errorContainer");
    errorContainer.classList.remove("hidden")
    errorContainer.textContent = data.errors[0].message
    setTimeout(() => errorContainer.classList.add("hidden"), 4000);
  }
  
   else if(data) {
    const profile = storage.get("profile")
    const bidHistory = document.querySelector("#bidHistory")
    const bidDetails = bidHistory.length % 2 === 0 ? createElement("div",  "bg-white xl:bg-grey grid grid-cols-2 py-3 rounded") : createElement("div", "grid grid-cols-2 py-3 rounded")
    const bidder = createElement("p", "pl-3", profile.name);
    const bidAmount = createElement("p", "text-right pr-3", body.amount + " credits");
    document.getElementById("bidCount").textContent = ` (${bidHistory.children.length + 1})`
    document.getElementById("currentBid").textContent = `${body.amount} credits`
    bidDetails.append(bidder, bidAmount);
    bidHistory.prepend(bidDetails)
   
   }
}