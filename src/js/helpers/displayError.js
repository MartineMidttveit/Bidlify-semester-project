import createElement from "./createElement.js"

export default function displayError(message) {
    const container = createElement(
        "div",
        "fixed top-0 left-0 w-screen h-screen flex justify-center z-50 items-center bg-black bg-opacity-20",
      );
    
      const error = createElement(
        "div",
        "fixed bg-white border rounded md:text-xl text-center min-h-20 px-4 flex flex-col items-center px-10 py-10"
      );

      const errorText = createElement(
        "p", "flex flex-col text-lg", "Could not proceed,"
      )

      const errorTextSpan = createElement(
        "span", "", "because of the following error:"
      )

      errorText.append(errorTextSpan);

      const iconBackground = createElement(
        "span", "bg-secondary bg-opacity-50 rounded-full w-14 h-14 flex items-center justify-center mb-4"
      )

      const errorIcon = createElement(
        "i", "fa-solid fa-xmark bg-secondary w-10 h-10 rounded-full flex items-center justify-center", ""
      )

      const errorMessage = createElement(
        "li", "text-red-600 mt-2 text-sm font-medium", message
      )
  
      error.append(iconBackground, errorText, errorMessage);
      container.append(error);
      iconBackground.append(errorIcon);
      document.body.append(container);
      setTimeout(() => {
        container.remove();
      }, 5000);
}