import config from "../../../config.js";

export default async function allActiveListings(page = 1, allListings = []) {

    const url = config.BaseURL + `auction/listings/?_bids=true&_seller=true&page=${page}`

    const response = await fetch(url,  {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Noroff-API-Key": config.APIKey
        },
    })

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
    }



