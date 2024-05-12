export default function imageCarousel () {
    const images = document.querySelectorAll('.frontpage-image');
    let index = 0;

    function changeImage() {
        images[index].classList.add('hidden');
        index = (index + 1) % images.length;
        images[index].classList.remove('hidden');
    }

    setInterval(changeImage, 5000);
}


