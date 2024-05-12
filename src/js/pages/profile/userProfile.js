import init from "../../updates/init.js";
import editProfile from "./openEditProfile.js";

init();

export default async function userProfile(profile, isOwner) {

  const profileTitle = document.querySelector("#profileTitle");
  profileTitle.textContent = profile.name+"'s" + " " + "profile";

  const profileName = document.querySelector("#profileName");
  profileName.textContent = profile.name;

  const profileEmail = document.querySelector("#profileEmail");
  profileEmail.textContent = profile.email;

  const profileImage = document.querySelector("#profileImage");
  profileImage.src = profile.avatar.url;

  const profileCredits = document.querySelector("#profileCredits");
  profileCredits.textContent = profile.credits;

  const editImage = document.querySelector("#editImage");
  editImage.src = profile.avatar.url;

  const createListingBtn = document.querySelector("#createListingBtn");

  if (isOwner) {
    const editProfileBtn = document.querySelector("#editProfileBtn");
    editProfileBtn.classList.remove("hidden");
    profileTitle.textContent = "Your profile";

    createListingBtn.classList.remove("hidden");
    createListingBtn.classList.add("flex");
  }

  editProfile(profile);
}