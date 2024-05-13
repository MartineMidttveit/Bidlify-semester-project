import thumbnail from "../../templates/listings/thumbnails/index.js";
import createElement from "../../helpers/createElement.js";

const allListings = document.querySelector("#allListings");
const amountOfListings = document.querySelector("#amountOfListings");
const noResults = document.querySelector(".noResults");

const viewMoreListingsBtn = createElement(
    "button", 
    "bg-primary hidden text-white rounded mt-4 py-4 w-full col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4", 
    "View more"
);

viewMoreListingsBtn.setAttribute("id", "viewMoreListingsBtn");

let displayedListings = 0;
const listingsPerPage = 12;
let allListingsData = []; 

export default function displayListings(listings) {
    allListingsData = listings; 
    allListings.innerHTML = "";
    amountOfListings.textContent = `(${listings.length} listings)`;
    displayedListings = 0;

    if (listings.length === 0) {
        noResults.classList.remove("hidden");
        noResults.textContent = "There were no results for this search...";
        viewMoreListingsBtn.classList.add("hidden");
        return;
    }

    noResults.classList.add("hidden");

    const loadingIndicator = document.querySelector(".loading-indicator");
    if (loadingIndicator) loadingIndicator.remove();

    displayMoreListings();
}

function displayMoreListings() {
    const endIndex = Math.min(displayedListings + listingsPerPage, allListingsData.length);
    const listingsToShow = allListingsData.slice(displayedListings, endIndex);
    
    listingsToShow.forEach(listing => {
        allListings.append(thumbnail(listing));
        allListings.append(viewMoreListingsBtn);
    });

    displayedListings += listingsToShow.length;

    if (displayedListings >= allListingsData.length) {
        viewMoreListingsBtn.classList.add("hidden");
    } else {
        viewMoreListingsBtn.classList.remove("hidden");
    }
}

viewMoreListingsBtn.addEventListener("click", () => {
    displayMoreListings();
});
