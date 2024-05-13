import config from "../../config.js";
import storage from "../../../helpers/storage.js";
import openEditProfile from "../../../pages/profile/openEditProfile.js";

openEditProfile();

export default async function updateAvatar(name, body) {

try {
    const token = storage.get("token");
    const url = config.BaseURL + "auction/profiles/" + name;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": config.APIKey,
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const data = await response.json();

        if (data.errors) {
            displayError(data.errors[0].message)
        } 
        throw new Error(data);
    }

    const data = await response.json();

    if (data) {
        const editProfile = document.querySelector("#editProfile");
        editProfile.style.display = "none";

        const profileImage = document.querySelector("#profileImage");
        profileImage.src = body.avatar.url;

        const headerAvatar = document.querySelector("#headerAvatar");
        headerAvatar.src = body.avatar.url;

        return data.data;
    }
} catch(err) {
    console.error(err);
}
}
   
