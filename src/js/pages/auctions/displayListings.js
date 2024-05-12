import thumbnail from "../../templates/listings/thumbnails/index.js";

const allListings = document.querySelector("#allListings");
const amountOfListings = document.querySelector("#amountOfListings");
const noResults = document.querySelector(".noResults");

export default function displayListings(listings) {
    allListings.innerHTML = "";
    amountOfListings.textContent = `(${listings.length} listings)`;

    console.log(listings)

    if (listings.length === 0) {
        noResults.classList.remove("hidden");
        noResults.textContent = "There were no results for this search..."
        return;
    }

    noResults.classList.add("hidden");

    listings.forEach(listing => {
        allListings.append(thumbnail(listing));
    });
}




