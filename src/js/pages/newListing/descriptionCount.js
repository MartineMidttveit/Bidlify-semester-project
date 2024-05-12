export default function descriptionCount() {
    const textarea = document.getElementById("listingDescription");
    const characterCount = document.getElementById("characterCount");

    textarea.addEventListener("input", function() {
        const textLength = textarea.value.length;

        if (textLength <= 280) {
            characterCount.textContent = textLength + "/280 characters";
            characterCount.classList.remove("text-gray-500");
            characterCount.classList.add("text-lime-600");
            characterCount.classList.add("font-medium");
        } else {
            characterCount.textContent = "280/280 characters";
            characterCount.classList.remove("text-lime-600");
            characterCount.classList.add("text-red-800");

            textarea.value = textarea.value.slice(0, 280);
        }

        setTimeout(function() {
            if (textarea.value.length === 0) {
                characterCount.textContent = "0/280 characters";
                characterCount.classList.remove("text-lime-600");
                characterCount.classList.remove("text-red-800");
                characterCount.classList.add("text-gray-500");
                characterCount.classList.remove("font-medium");
            }
        }, 300); 
    });
}