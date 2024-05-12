import getUserListings from "../../../api/auth/requests/getUserListings.js";
import thumbnail from "../../../templates/listings/thumbnails/index.js";
import bidHistory from "./bidHistory.js"

const userListingsContainer = document.querySelector("#userListings");
const listingGenreTitle = document.querySelector("#listingGenreTitle");
const listingCount = document.querySelector("#listingCount");

export default async function sortListings(sortBy, data) {

    userListingsContainer.innerHTML = "";

    if(sortBy === "Active") {
        listingGenreTitle.textContent = "Active listings";
        listingCount.textContent = `(${data.active.length} listings)`;

       if(data.active?.length > 0) data.active.forEach(listing =>userListingsContainer.append(thumbnail(listing))  )  
        else userListingsContainer.textContent = "No listings found"
    }

    else if(sortBy === "Expired") {
        listingGenreTitle.textContent = "Expired listings";
        listingCount.textContent = `(${data.expired.length} listings)`;

        if(data.expired?.length > 0) data.expired.forEach(listing => {
            userListingsContainer.append(thumbnail(listing));
        }) 
        else userListingsContainer.textContent = "No listings found"
    }

    else if(sortBy === "Sold") {
        listingGenreTitle.textContent = "Sold listings";
        listingCount.textContent = `(${data.sold.length} listings)`;

        if(data.sold?.length > 0) data.sold.forEach(listing => {
            userListingsContainer.append(thumbnail(listing));
        }) 
        else userListingsContainer.textContent = "No listings found"
    }

    else if (sortBy === "BidHistory") {
        listingGenreTitle.textContent = "Bids history";
        listingCount.textContent = `(${data.bids.length} bids)`;
        bidHistory(data.bids, userListingsContainer)
    }
    
    else if (sortBy === "Won") {
        listingGenreTitle.textContent = "Won listings";
        listingCount.textContent = `(${data.wins.length} listings)`;

        if(data.wins?.length > 0) data.wins.forEach(listing => {
            userListingsContainer.append(thumbnail(listing));
        }) 
        else userListingsContainer.textContent = "No listings found" 
    }
}

