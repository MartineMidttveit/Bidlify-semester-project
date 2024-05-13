import headerWord from "./headerWord.js";
import imageCarousel from "./imageCarousel.js";
import getListings from "../../api/auth/requests/getListings.js"
import thumbnail from "../../templates/listings/thumbnails/index.js";
import init from "../../updates/init.js";

const endingSoon = document.querySelector("#endingSoonListings");
const latestListings = document.querySelector("#latestListings");

init();
headerWord();
imageCarousel();

const data = await getListings();

const listings = data.data;

const activeListings = []
listings.forEach(listing => {

    const endDate = new Date(listing.endsAt);
    const now = new Date()
    
    if (endDate > now) {
      activeListings.push(listing)  
    }
})

const sortByDate = activeListings.sort((a,b) => new Date(a.endsAt) - new Date(b.endsAt))

for(let i = 0; i < 4; i++) {
    endingSoon.appendChild(thumbnail(sortByDate[i]))
}

const sortByCreated = activeListings.sort((a,b) => new Date(b.created) - new Date(a.created))

for(let i = 0; i < 4; i++) {
    latestListings.appendChild(thumbnail(sortByCreated[i]))
}

const loadingIndicator = document.querySelectorAll(".loading-indicator");
loadingIndicator.forEach(indicator => {
   indicator.remove();
});