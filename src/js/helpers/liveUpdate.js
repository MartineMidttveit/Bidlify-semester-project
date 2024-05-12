export default function liveUpdate(img, input, defaultImg = false) {
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