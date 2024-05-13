const modalContainer = document.querySelector("#modal-container");

export default function modalToggle() {
    modalContainer.classList.toggle("hidden")
    modalContainer.classList.toggle("flex")
    document.body.classList.toggle("overflow-hidden")
}


