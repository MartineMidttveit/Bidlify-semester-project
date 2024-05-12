import getUserListings from "../../../api/auth/requests/getUserListings.js";
import thumbnail from "../../../templates/listings/thumbnails/index.js";
import sortListings from "./sortListings.js";
import wonListings from "../../../api/auth/requests/wonListings.js"
import getProfileBids from "../../../api/auth/requests/getProfileBids.js"

const userListingsContainer = document.querySelector("#userListings");
const sortListingsDesktop = document.querySelector("#sortListingsDesktop");
const sortListingsMobile = document.querySelector("#sortListingsMobile");
const listingGenreTitle = document.querySelector("#listingGenreTitle");
const listingCount = document.querySelector("#listingCount");


export default async function userListings(name) {
    let active = [];
    let expired = [];
    let sold = [];

    const listingsData = await getUserListings(name);
    const listings = listingsData.data;

    const winsData = await wonListings(name);
    const wins = winsData.data

    const bidsData = await getProfileBids(name)
    const bids = bidsData.data

    listings.forEach(listing => {
        const listingEndDate = new Date(listing.endsAt);
        const currentDate = new Date();

        if (listingEndDate < currentDate) {
            listing.bids.length > 0 ? sold.push(listing) : expired.push(listing);
         
        } else {
            active.push(listing);
        }
    });
    
    const data = {
        active,
        expired,
        sold,
        wins,
        bids
    }

    listingGenreTitle.textContent = "Active listings";
    listingCount.textContent = `(${data.active.length} listings)`;

    active.forEach(listing => userListingsContainer.append(thumbnail(listing)));

    sortListingsMobile.addEventListener("change", (e) => {
        const sortBy = e.target.value;
        sortListings(sortBy, data);
    })

    sortListingsDesktop.addEventListener("change", (e) => {
        const sortBy = e.target.value;
        sortListings(sortBy, data);
    });
}
