import createElement from "../../../helpers/createElement.js";
import newDate from "../../../helpers/newDate.js"

export default function bidHistory(bids, container) {
    const allBidsContainer = createElement("div", "col-span-1 md:col-span-2 2xl:col-span-3")
    
    if (bids?.length > 0) {

    const now = new Date()

    bids.forEach((bid, i) => {
    let bidItem = createElement("div", "grid grid-cols-3 md:grid-cols-4 rounded items-center py-4 md:p-6");

    i % 2 === 1 && bidItem.classList.add("bg-grey")

    let bidName = createElement("p", "text-sm lg:text-base", bid.listing.title);
    let bidDate = createElement("p", "text-sm lg:text-base text-center hidden md:block", newDate(bid.created));
    let bidAmount = createElement("p", "text-sm lg:text-base text-center", bid.amount);
    bidItem.append(bidName, bidDate, bidAmount);

    let button;

    if (new Date(bid.listing.endsAt) > now) {
        button = createElement("button", "px-4 py-2 md:py-3 md:px-6 bg-primary rounded text-white text-sm 2xl:text-base", "view listing") 
        button.addEventListener("click", () => {
            window.location.href = `/pages/listing/?id=${bid.listing.id}`
        })
    }  
    else {
        button = createElement("button", "px-4 py-2 md:py-3 md:px-6 border rounded text-sm 2xl:text-base", "expired")
        button.disabled = true;
    }

    bidItem.appendChild(button);
    allBidsContainer.append(bidItem)

    })
        container.append(allBidsContainer)
    }
    else {
        container.textContent = "No bids by user"
    }

}

    



    


{/* <div id="bidHistory" class="col-span-1 md:col-span-2 2xl:col-span-3"> */}