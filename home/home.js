var slideIndex = 0;

$(document).ready(showSlides);

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";

    slideIndex = (slideIndex + 1) % slides.length;

    setTimeout(showSlides, 7000);
}