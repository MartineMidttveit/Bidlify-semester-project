import displayListings from "./displayListings.js";

export default function(listings) {
    
function sortListings(sortBy) {
    switch (sortBy) {
        case "Latest":
            listings.sort((a, b) => new Date(b.created) - new Date(a.created));
            break;
        case "Ending":
            listings.sort((a, b) => new Date(a.endsAt) - new Date(b.endsAt));
            break;
        case "TitleAZ":
            listings.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "TitleZA":
            listings.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
    displayListings(listings);
}

sortListings("Latest");

document.querySelector("#sortBy").addEventListener("change", () => {
    const sortBy = document.querySelector("#sortBy").value;
 
    sortListings(sortBy);
}); 
}