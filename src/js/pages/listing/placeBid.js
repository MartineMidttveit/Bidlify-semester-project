import postBid from "../../api/auth/requests/postBid.js";
import modalToggle from "../../helpers/modalToggle.js";

const bidInput = document.querySelector("#bidAmount");
const placeBidBtn = document.querySelector("#placeBid");

export default  function placeBid(id) {

placeBidBtn.addEventListener('click', () => {

    const loginBtn = document.querySelector("#openLogin");
   if (loginBtn) modalToggle()

    if (bidInput.value === "") return;
  
    const body = {
    amount: Number(bidInput.value)
   } 

    postBid(id, body)
   
    })     
}
