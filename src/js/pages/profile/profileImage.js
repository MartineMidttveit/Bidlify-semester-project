import updateAvatar from "../../api/auth/requests/updateAvatar.js";

export default function profileImage() {
  const saveChangesBtn = document.querySelector("#saveChangesBtn");
  const imageInput = document.querySelector("#imageInput");
  const editImg = document.querySelector("#editImage");

  function liveUpdate(img, input, defaultImg = false) {
    input.addEventListener("input", () => {
      const url = input.value;

      if (!url || url === "") {
        defaultImg ? (img.src = defaultImg) : (img.src = "/src/images/placeholder/placeholder.png");

        return;
      }

      try {
        new URL(url);
        img.src = url;
      } catch (err) {
        console.log(err);
        defaultImg ? (img.src = defaultImg) : (img.src = "/src/images/placeholder/placeholder.png");
      }
    });
  }

  liveUpdate(editImg, imageInput);

  saveChangesBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const body = {
      avatar: {
        url: imageInput.value,
        alt: "Bidlify profile image"
      }
    };

    const profileName = document.querySelector("#profileName").textContent;
    await updateAvatar(profileName, body);
  });
}