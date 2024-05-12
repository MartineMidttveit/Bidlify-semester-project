const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const allListings = document.querySelector("#allListings");
const amountOfListings = document.querySelector("#amountOfListings");
const noResults = document.querySelector(".noResults");

export default function searchBar() {

    const listingTitles = allListings.querySelectorAll("#listingTitle")

    searchButton.addEventListener("click", (e) => {
        let result = [];

        listingTitles.forEach(listing => {
            if(listing.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                listing.parentElement.parentElement.classList.remove("hidden")
                result.push(listing)
            }
            else {
                listing.parentElement.parentElement.classList.add("hidden")
            }
        })

        amountOfListings.textContent = `(${result.length} listings)`

        if (result.length === 0) {
            noResults.classList.remove("hidden");
            noResults.classList.add("flex")
        }

    }) 
    
}

