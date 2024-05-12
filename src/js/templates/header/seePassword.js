const toggleButton = document.querySelectorAll(".toggleButton");
const passwordInput = document.querySelectorAll(".passwordInput");

export default function seePassword() {

  toggleButton.forEach((btn, i) => {
    btn.addEventListener("click", function() {
      if (passwordInput[i].type === "password") {
        passwordInput[i].type = "text";
      } else {
        passwordInput[i].type = "password";
      }
    });
  })
}