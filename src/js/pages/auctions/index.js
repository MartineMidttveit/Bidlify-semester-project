import init from "../../updates/init.js";
import allActiveListings from "../../api/auth/requests/complexRequests/allActiveListings.js";
import displayListings from "./displayListings.js";
import sortListings from "./sortListings.js";
import searchBar from "./searchbar.js";

init();

const activeListings = await allActiveListings();

sortListings(activeListings);
displayListings(activeListings);
searchBar(activeListings)
