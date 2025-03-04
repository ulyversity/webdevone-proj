

document.getElementById("object-fit-toggle").addEventListener("click", () => {
    let imageList = document.querySelectorAll(".image-placeholder img");

    console.log(imageList.length);

    for (let image of imageList) {

        if (image.style.objectFit === "contain") {
            image.style.objectFit = "cover";
        }
        else {
            image.style.objectFit = "contain";
        }
    }
});
