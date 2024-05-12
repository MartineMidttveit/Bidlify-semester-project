import createElement from "../../helpers/createElement.js";
import randomNumber from "../../helpers/randomNumber.js";

export default function listingMedia (img) {

    const imgContainer = createElement("figure", " listing-img");

    const listingImage = createElement("img", "object-cover h-80 sm:h-96 lg:h-[30rem] xl:h-[35rem] 2xl:h-[38rem] rounded w-full");

    listingImage.src = img?.url ? img?.url : `/src/images/placeholder/placeholder${randomNumber(21)}.jpg` ;

    listingImage.alt = img?.alt ? img?.alt : "A bidlify listing image";
    imgContainer.append(listingImage);
    listingMediaContainer.append(imgContainer);

    return imgContainer;
}