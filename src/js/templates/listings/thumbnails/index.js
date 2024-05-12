import createEle from "../../../helpers/createElement.js";
import endsAt from "../../../helpers/endsAt.js";
import randomNumber from "../../../helpers/randomNumber.js";

export default function thumbnail(data) {
    const listing = createEle("figure");
    listing.setAttribute('class', 'relative');

    const clickListing = createEle("a");
    clickListing.href = `/pages/listing/?id=${data.id}`;
    listing.appendChild(clickListing);

    const listingImage = createEle("img", "rounded w-full object-cover hover:opacity-90 duration-100 h-80 md:h-96 xl:h-80 2xl:h-96");
    listingImage.src = data.media[0]?.url ? data.media[0]?.url : `/src/images/placeholder/placeholder${randomNumber(21)}.jpg` ;
    listingImage.alt = data.media[0]?.alt ? data.media[0].alt : `${data.title} - a bidlify listing`;
    clickListing.appendChild(listingImage);

    const listingText = createEle("figcaption");
    listing.appendChild(listingText);

    const listingTitle = createEle("h2", "font-medium text-sm md:text-base xl:text-lg 2xl:text-xl pt-3 md:pt-4", data.title.length > 25 ? data.title.slice(0, 25) + "..." : data.title);
    listingTitle.setAttribute("id", "listingTitle");

    listingText.appendChild(listingTitle);

    const endsIn = createEle("p", "text-gray-500 pb-2 xl:pb-3 pt-1 xl:pt-1 font-medium text-xs md:text-sm xl:text-base", "Ends in ");
    const endsInTime = createEle("span", "time-left", endsAt(data.endsAt));
    endsIn.appendChild(endsInTime);
    listingText.appendChild(endsIn);

    const currentBid = createEle("p", "pb-4 md:pb-5 text-xs font-medium md:font-normal sm:text-sm lg:text-base 2xl:text-lg", "Current bid: ");
    const bidAmount = createEle("span", "current-bid", data.bids.length > 0 ? data.bids[data.bids.length - 1].amount + " credits": 0 + " credits");
    currentBid.appendChild(bidAmount);
    listingText.appendChild(currentBid);

    const viewListing = createEle("button", "border rounded w-full py-2 md:py-3 hover:bg-secondary hover:border-secondary text-xs md:text-sm xl:text-base duration-300", "View listing");
    listingText.appendChild(viewListing);

    return listing;
}




