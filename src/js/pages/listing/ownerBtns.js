
import createElement from "../../helpers/createElement.js";
import deleteListing from "../../api/auth/requests/deleteListing.js";

const ownerButtons = document.querySelector("#ownerButtons"); 
const deleteListingElement = document.querySelector("#deleteListing");
const confirmDelete =  document.querySelector("#deleteBtn2");
const confirmCancel = document.querySelector("#closeDelete")
const deleteListingContent = document.querySelector("#deleteListingContent")

export default function ownerBtns(id) {
    const editBtn = createElement(
        "a",
        "text-sm mr-3 2xl:text-base bg-light md:bg-grey px-4 xl:px-6 py-2 rounded-full hover:bg-primary hover:text-white duration-300",
        "Edit listing"
      );
      editBtn.setAttribute("href", `/pages/editListing/?id=${id}`);
      
    const deleteBtn = createElement(
        "button",
        "text-sm 2xl:text-base px-4 xl:px-6 py-2 bg-light md:bg-grey rounded-full hover:bg-primary hover:text-white duration-300",
        "Delete"
      );
    ownerButtons.append(editBtn, deleteBtn)

    deleteBtn.addEventListener("click", () => {
        deleteListingElement.classList.remove("hidden");
        deleteListingElement.classList.add("flex");

            const clickOutside = window.addEventListener("click" ,(e) =>  {
                if (deleteListingContent.contains(e.target) || deleteBtn.contains(e.target) ) return;
                deleteListingElement.classList.add("hidden");
                deleteListingElement.classList.remove("flex");
                removeEventListener("click", clickOutside)
        })   
    })

    confirmDelete.addEventListener("click", async () => {
        const data = await deleteListing(id)

        if (data) {
            deleteListingElement.classList.add("hidden");
            deleteListingElement.classList.remove("flex");
            window.location.href = "/pages/profile/"
        }
        else {

        }
    })

    confirmCancel.addEventListener("click", () => {
        deleteListingElement.classList.add("hidden");
        deleteListingElement.classList.remove("flex");
    })
}