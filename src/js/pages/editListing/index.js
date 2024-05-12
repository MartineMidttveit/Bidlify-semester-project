import listingMedia from "../../pages/newListing/listingMedia.js";
import descriptionCount from "../../pages/newListing/descriptionCount.js"
import storage from "../../helpers/storage.js";
import getListings from "../../api/auth/requests/getListings.js";
import editListingForm from "../../api/listeners/editListingForm.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = await getListings(id);
const listing = data.data;

editListingForm(listing);
descriptionCount();
listingMedia(listing.media);
