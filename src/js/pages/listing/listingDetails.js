import mediaElements from "./mediaElements.js";
import liveEndsAt from "../../helpers/liveEndsAt.js";
import listingMedia from "./listingMedia.js";
import newDate from "../../helpers/newDate.js";
import createElement from "../../helpers/createElement.js";
import placeBid from "./placeBid.js";

const listingMediaContainer = document.querySelector("#listingMediaContainer");
const profileName = document.querySelector("#userName");
const lastUpdated = document.querySelector("#lastUpdated");
const endsAtContainer = document.querySelector("#endingTime")
const userImg = document.querySelector("#userImg");
const bidHistory = document.querySelector("#bidHistory");
const userImage = document.querySelector("#userImage");
const tagsContainer = document.querySelector("#tagsContainer");

export default function listingDetails (listing, id) {

    profileName.textContent = listing.seller.name;
    profileName.href = `/pages/profile/?name=${listing.seller.name}`;

    document.querySelector("#listingTitle").textContent = listing.title;

    lastUpdated.textContent = newDate(listing.updated);

    liveEndsAt(listing.endsAt, endsAtContainer);

    document.querySelector("#listingDescription").textContent = listing.description ? listing.description : "No description provided.";

    listing.tags.forEach(tag => {
        const tagText = document.createElement("p");
        tagText.textContent = "#" + tag;
        tagsContainer.append(tagText);
    });

    document.querySelector("#currentBid").textContent = listing.bids.length > 0 ? listing.bids[listing.bids.length - 1].amount + " credits": 0 + " credits";

    userImg.href = `/pages/profile/?name=${listing.seller.name}`;
    userImage.src = listing.seller.avatar.url;
    userImg.append(userImage);

    listing.bids.reverse()

    listing.bids.forEach((bid, i) => {
        const bidDetails =  i % 2 === 0 ? createElement("div", "bg-white xl:bg-grey grid grid-cols-2 py-3 rounded") : createElement("div", "grid grid-cols-2 py-3 rounded");

        const bidder = createElement("p", "pl-3", bid.bidder.name);
        const bidAmount = createElement("p", "text-right pr-3", bid.amount + " credits");

        bidDetails.append(bidder, bidAmount);
        bidHistory.append(bidDetails);
    });

    const bidCount = document.querySelector("#bidCount");
    bidCount.textContent = " (" + listing.bids.length + ")";

    if (listing.media.length > 1) mediaElements(listing.media);
    else if (listing.media.length === 1) listingMediaContainer.append(listingMedia(listing.media[0]));
    else listingMediaContainer.append(listingMedia());
    placeBid(id);
}