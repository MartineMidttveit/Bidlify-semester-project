export default function openEditProfile () {
    const editProfileBtn = document.querySelector("#editProfileBtn");
    const editProfile = document.querySelector("#editProfile");
    const closeEditProfile = document.querySelector("#closeEditProfile");
    const cancelChangesBtn = document.querySelector("#cancelChangesBtn");

    const closeModal = () => {
        editProfile.style.display = "none"; 
    }

    editProfileBtn.addEventListener('click', () => {
        editProfile.style.display = "flex";
    });

    cancelChangesBtn.addEventListener('click', closeModal);
    closeEditProfile.addEventListener('click', closeModal);
 }





