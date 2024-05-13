import createElement from "../../../helpers/createElement.js";
import endsAt from "../../../helpers/endsAt.js";
import randomNumber from "../../../helpers/randomNumber.js";

export default function thumbnail(data) {
    const listing = createElement("figure");

    const clickListing = createElement("a");
    clickListing.href = `/pages/listing/?id=${data.id}`;
    
    const listingImage = createElement("img", "rounded w-full object-cover hover:opacity-90 duration-100 h-80 md:h-96 xl:h-80 2xl:h-96");
    listingImage.src = data.media[0]?.url ? data.media[0]?.url : `/src/images/placeholder/placeholder${randomNumber(21)}.jpg` ;
    listingImage.alt = data.media[0]?.alt ? data.media[0].alt : `${data.title} - a bidlify listing`;
    
    const listingText = createElement("figcaption");
    
    const listingTitle = createElement("h2", "font-medium text-sm md:text-base xl:text-lg 2xl:text-xl pt-3 md:pt-4", data.title.length > 25 ? data.title.slice(0, 25) + "..." : data.title);
    listingTitle.setAttribute("id", "listingTitle");

    const endsIn = createElement("p", "text-gray-500 pb-2 xl:pb-3 pt-1 xl:pt-1 font-medium text-xs md:text-sm xl:text-base", "Ends in ");
    const endsInTime = createElement("span", "time-left", endsAt(data.endsAt));
    
    const currentBid = createElement("p", "pb-4 md:pb-5 text-xs font-medium md:font-normal sm:text-sm lg:text-base 2xl:text-lg", "Current bid: ");
    const bidAmount = createElement("span", "current-bid", data.bids.length > 0 ? data.bids[data.bids.length - 1].amount + " credits": 0 + " credits");
    
    const viewListing = createElement("a", "border rounded py-2 md:py-3 hover:bg-secondary hover:border-secondary text-xs md:text-sm xl:text-base duration-300 w-full flex items-center justify-center", "View listing");
    viewListing.href = `/pages/listing/?id=${data.id}`
    
    clickListing.append(listingImage);
    listing.append(clickListing, listingText, viewListing);
    listingText.append(listingTitle, endsIn, currentBid);

    endsIn.append(endsInTime);
    currentBid.append(bidAmount);
    
    return listing;
}




