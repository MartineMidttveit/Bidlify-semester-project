import config from "../../../config.js";

export default async function allActiveListings(page = 1, allListings = []) {

    try {
        const url = config.BaseURL + `auction/listings/?_bids=true&_seller=true&page=${page}`

        const response = await fetch(url,  {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Noroff-API-Key": config.APIKey
            },
        })

        if (!response.ok) {
         
            if(data.errors) {
                throw new Error(data.errors[0].message) 
            }
            else {
                throw new Error("Something went wrong. Could not get listings.")
            }
        }

        const data = await response.json()

        allListings = [...allListings, ...data.data]
        if (!data.meta.isLastPage) {

            page = page +1;
            return await allActiveListings(page, allListings)

        }
        else {
            allListings = allListings.filter((listing) => {
                const timeNow = new Date().getTime()
                if (timeNow < new Date(listing.endsAt)) {
                    return listing;
                }

            })
        
            return allListings;
        }
    } catch(error) {
        const auctionsError = document.querySelector("#auctions-error");
        auctionsError.textContent = error;
    }
}
    



