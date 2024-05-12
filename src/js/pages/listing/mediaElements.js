import createElement from "../../helpers/createElement.js";
import listingMedia from "./listingMedia.js";

const listingMediaContainer = document.querySelector("#listingMediaContainer");

export default function mediaElements (images) {

    const imageCounter = createElement("div", "absolute flex top-4 right-4 md:top-5 md:right-5");

    const imageCounterText = createElement("span", "bg-grey rounded-full px-3 py-1.5 text-xs md:text-sm text-gray-700 2xl:text-base xl:px-4 xl:py-2 text-center", `1/${images.length} images`);
    imageCounterText.setAttribute("id", "imageCounter");

    const mediaBtns = createElement("div", "flex justify-between items-center absolute bottom-4 right-4 left-4 md:bottom-5");
    mediaBtns.setAttribute("id", "mediaBtns");

    const prevBtn = createElement("button", "bg-grey rounded-full px-3 py-2 text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-700 xl:p-4 xl:max-h-10 2xl:px-6 2xl:py-4 2xl:max-h-12 flex items-center justify-center");
    prevBtn.setAttribute("id", "prevBtn");
    
    const prevIcon = createElement("i", "fa-solid fa-arrow-left-long");

    const nextBtn = createElement("button", "bg-grey rounded-full px-3 py-2 text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-700 xl:p-4 xl:max-h-10 2xl:px-6 2xl:py-4 2xl:max-h-12 flex items-center justify-center");
    nextBtn.setAttribute("id", "nextBtn");
    
    const nextIcon = createElement("i", "fa-solid fa-arrow-right-long");

    const imgArray = []

    images.forEach((img,i) => {
        const imgContainer = listingMedia(img);
        i === 0 ? imgContainer.classList.add("active") : imgContainer.classList.add("hidden")
        listingMediaContainer.append(imgContainer);
        imgArray.push(true)
    });

    let imgNumber = 1;

    nextBtn.addEventListener("click", () => {
        if(imgNumber >= images.length) imgNumber = 0;
        
        imgArray.forEach((img, i) => {
            listingMediaContainer.children[i].classList.add("hidden");
        })
        listingMediaContainer.children[imgNumber].classList.remove("hidden")
        imgNumber ++;
        
        imageCounterText.textContent = `${imgNumber}/${images.length} images`
    })

    prevBtn.addEventListener("click", () => {
        if(imgNumber <= 1) imgNumber = images.length +1;

        imgArray.forEach((img, i) => {
            listingMediaContainer.children[i].classList.add("hidden");
        })
     
        imgNumber --;
        listingMediaContainer.children[imgNumber -1].classList.remove("hidden")
    })
    
    imageCounter.append(imageCounterText);
    prevBtn.append(prevIcon);
    nextBtn.append(nextIcon);
    mediaBtns.append(prevBtn, nextBtn);
    listingMediaContainer.append(imageCounter, mediaBtns);
}


