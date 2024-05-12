import init from "../../updates/init.js";
import createNewListing from "../../api/listeners/createNewListing.js";
import listingMedia from "./listingMedia.js";
import descriptionCount from "./descriptionCount.js";

const closeNewListing = document.querySelector("#closeNewListing");
closeNewListing.addEventListener("click", function() {
    window.history.back();
});

descriptionCount();
listingMedia();
createNewListing();
init();





