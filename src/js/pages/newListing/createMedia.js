import createElement from "../../helpers/createElement.js";

const mediaGallery = document.querySelector("#mediaGallery");

export default function createMedia (url,  placeholder = false, images = false) {
    const imgContainer = createElement('figure', 'relative h-48 sm:h-60 md:h-60 lg:h-72 2xl:h-60');
    const listingImg = createElement('img', 'object-cover h-full w-full rounded create-listing-img');
    listingImg.src = url;
    listingImg.alt = "A bidlify listing image";

    const removeBtn = createElement('button', 'bg-light h-8 w-8 lg:h-10 lg:w-10 rounded-full flex items-center justify-center absolute top-3 right-3');

    const iconText = createElement('abbr');
    iconText.title = "Remove image";

    const removeIcon = createElement('i', 'fa-solid fa-xmark');
    
    iconText.append(removeIcon);
    removeBtn.append(iconText);

    imgContainer.append(listingImg, removeBtn)

    removeBtn.addEventListener('click', () => {

        imgContainer.remove();

        if(mediaGallery.children.length <= 3) {

                if (mediaGallery.children.length === 2) {
                    const placeholder1 = document.querySelector("#placeholder-1");
                    placeholder1.classList.remove("hidden")
                }
                else {
                    const placeholder2 = document.querySelector("#placeholder-2")
                    placeholder2.classList.remove("hidden")
                    mediaGallery.appendChild(placeholder2)
            }        
        }
    })

    return imgContainer;
}