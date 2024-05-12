import newListing from "../auth/requests/newListing.js";

const createListing = document.querySelector("#createListing");

export default function createNewListingForm() { 

    createListing.addEventListener("submit", async (e) => { 
        e.preventDefault()
        
        const endDate = document.querySelector("#endDate").value;
        const endTime = document.querySelector("#endTime").value;
        const dateAndTime = `${endDate}T${endTime}:00.000Z`

        const body = {
            title: document.querySelector("#listingItem").value,
            description: document.querySelector("#listingDescription").value,
            endsAt: dateAndTime,
            media: [],
        }

        document.querySelectorAll(".create-listing-img").forEach(img => {
            body.media.push({url: img.src, alt: "A bidlify listing image"})
        })

        await newListing(body)
    })
}

