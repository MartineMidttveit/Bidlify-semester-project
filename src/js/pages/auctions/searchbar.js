import searchListings from "../../api/auth/requests/searchListings.js";
import allActiveListings from "../../api/auth/requests/complexRequests/allActiveListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";

export default function searchBar() {
    const searchInput = document.querySelector("#searchInput");
    const searchButton = document.querySelector("#searchButton");
    const allListingsContainer = document.querySelector("#allListings");
    const amountOfListings = document.querySelector("#amountOfListings");
    const noResults = document.querySelector(".noResults");

    searchButton.addEventListener("click", async () => {
        try {
            const listings = await allActiveListings();
            const searchTerm = searchInput.value.toLowerCase(); 
            
            const filteredListings = listings.filter(listing =>
                listing.title.toLowerCase().includes(searchTerm)
            );

            allListingsContainer.innerHTML = "";
            noResults.classList.add("hidden");
            amountOfListings.textContent = "";

            if (filteredListings.length > 0) {
                filteredListings.forEach(listing => {
                    const listingElement = thumbnail(listing);
                    allListingsContainer.appendChild(listingElement);
                });
                amountOfListings.textContent = `(${filteredListings.length} listings)`;
            } else {
                noResults.classList.remove("hidden");
                noResults.classList.add("flex");
            }
        } catch (error) {
            console.error(error);
            displayError("An error occurred while fetching listings.");
        }
    });
}