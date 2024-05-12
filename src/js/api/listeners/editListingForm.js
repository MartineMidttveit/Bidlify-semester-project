import editRequest from "../auth/requests/editListing.js"

const editListing = document.querySelector("#editListing");
let title = document.querySelector("#listingItem");
let description = document.querySelector("#listingDescription")

export default function editListingForm(listing) { 

    listing.title && (title.value = listing.title);
    listing.description && (description.value = listing.description)

    editListing.addEventListener("submit", async (e) => { 
        e.preventDefault()

        const body = {
            title: title.value,
            description: description.value,
            media: [],
        }

        document.querySelectorAll(".create-listing-img").forEach(img => {
            body.media.push({url: img.src, alt: "A bidlify listing image"})
        })

        await editRequest(body, listing.id)
    })
}

