export default function closeElement(parentElement, object) {

    const iconDropDownBtn = document.querySelector(".fa-chevron-down");
    
    window.onclick = function(event) {

        if(event.target == parentElement || parentElement.contains(event.target)) {
            return;
        }
        object.classList.remove("show");
        iconDropDownBtn.classList.remove("rotate-drop-down-icon");
    }

}