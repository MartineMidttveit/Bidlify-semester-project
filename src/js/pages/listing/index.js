import init from "../../updates/init.js";
import getListings from "../../api/auth/requests/getListings.js";
import storage from "../../helpers/storage.js";
import ownerBtns from "./ownerBtns.js";
import listingDetails from "./listingDetails.js";

init();

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const userProfile = storage.get("profile");

const data = await getListings(id);
const listing = data.data;

const isOwner = userProfile?.email === listing.seller.email ? true : false; 

if (isOwner) {
    ownerBtns(listing.id)
}

listingDetails(listing, id);

const loadingIndicator = document.querySelector(".loading-indicator");
if (loadingIndicator) loadingIndicator.remove();