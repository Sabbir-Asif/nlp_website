document.addEventListener("DOMContentLoaded", function () {
    const imageSources = [
        "/images/iit_du_building1.png",
        "/images/another_image1.png",
        "/images/another_image2.png",
    ];

    const imageElement = document.getElementById("buildingImage");
    let currentIndex = 0;

    function displayNextImage() {
        imageElement.src = imageSources[currentIndex];
        currentIndex = (currentIndex + 1) % imageSources.length;

        setTimeout(displayNextImage, 2000);
    }

    displayNextImage();
});