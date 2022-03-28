var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none ";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block ";
    dots[slideIndex - 1].className += "active";
}

/*movil */
var slideIndexMov = 1;
showSlidesMov(slideIndexMov);

function plusSlidesMov(n) {
    showSlidesMov(slideIndexMov += n);
}

function currentSlideMov(n) {
    showSlidesMov(slideIndexMov = n);
}

function showSlidesMov(n) {
    var i;
    var slidesMov = document.getElementsByClassName("mySlidesMov");
    var dotsMov = document.getElementsByClassName("dotMov");
    if (n > slidesMov.length) {
        slideIndexMov = 1
    }
    if (n < 1) {
        slideIndexMov = slidesMov.length
    }
    for (i = 0; i < slidesMov.length; i++) {
        slidesMov[i].style.display = "none ";
    }
    for (i = 0; i < dotsMov.length; i++) {
        dotsMov[i].className = dotsMov[i].className.replace("active", "");
    }
    slidesMov[slideIndexMov - 1].style.display = "block";
    dotsMov[slideIndexMov - 1].className += " active";
}