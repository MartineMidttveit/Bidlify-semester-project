import createElement from "../../helpers/createElement.js";
import createMedia from "./createMedia.js";

const listingImage = document.querySelector("#listingImage");
const uploadButton = document.querySelector("#uploadButton");
const mediaGallery = document.querySelector("#mediaGallery");
const errorContainer = document.querySelector("#error-url")

export default function listingMedia (images) {
    const placeholder1 = createElement('figure', 'relative h-48 sm:h-60 md:h-60 lg:h-72 2xl:h-60 bg-grey border-2 border-dotted border-neutral-300 flex items-center justify-center rounded');
    placeholder1.setAttribute("id", "placeholder-1")
    const placeholder2 = createElement('figure', 'relative h-48 sm:h-60 md:h-60 lg:h-72 2xl:h-60 bg-grey border-2 border-dotted border-neutral-300 flex items-center justify-center rounded');
    placeholder2.setAttribute("id", "placeholder-2")
    const placeholderIcon1 = createElement('i', 'fa-regular fa-image text-2xl text-gray-500');
    const placeholderIcon2 = createElement('i', 'fa-regular fa-image text-2xl text-gray-500');

    let curImage = 1;

    placeholder1.append(placeholderIcon1);
    placeholder2.append(placeholderIcon2);

    if(images && images.length > 0) {
        placeholder1.classList.add("hidden")

        if(images.length > 1) placeholder2.classList.add("hidden")

        images.forEach(img =>  {
            mediaGallery.prepend(createMedia(img.url))
        })
    }

    uploadButton.addEventListener("click", (e) => {

    if (!listingImage.value || (listingImage.value === "")) return;

try {
    new URL(listingImage.value)
        if (!placeholder1.classList.contains("hidden")) {
                placeholder1.classList.add("hidden")
                mediaGallery.prepend(createMedia(listingImage.value, placeholder1)) 
        }  
         else if (!placeholder2.classList.contains("hidden")) {
            placeholder2.classList.add("hidden")
            mediaGallery.append(createMedia(listingImage.value,  placeholder2))
        }
        
        else {
            mediaGallery.append(createMedia(listingImage.value))
        }
        curImage++;
        listingImage.value = ""
    }
    catch(err) {
        errorContainer.textContent = "Must be a valid URL"
        errorContainer.classList.remove("hidden")
        setTimeout(() => errorContainer.classList.add("hidden"), 5000)
    }
    })

    mediaGallery.append(placeholder1,placeholder2)
}



