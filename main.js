// get slider items | Array.from
let sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);

// get number of slides
let slidesCount = sliderImages.length;

//set current slide index
let currentSlide = 1;

// slide number element
let slideNumberElement = document.getElementById("slide-number");

// previous and next buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let indicators = document.getElementById("indicators");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let pagElement = document.createElement("ul");
pagElement.setAttribute("id", "pag-ul");

//create list based on images count
for (let i = 1; i <= sliderImages.length; i++) {
    //create li
    let pagItems = document.createElement("li");
    // set custom attribute
    pagItems.setAttribute("data-index", i);
    //set item content
    pagItems.appendChild(document.createTextNode(i));
    pagElement.appendChild(pagItems);
}
indicators.appendChild(pagElement);
// get the new created ul
let pagCreatedUl = document.getElementById("pag-ul");
let pagBullets = Array.from(document.querySelectorAll("#pag-ul li"));
for (let i = 0; i < pagBullets.length; i++) {
    pagBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'))
        checker();
    }
}
checker();

//function next slide
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
    } else {
        currentSlide++;
        checker();
    }
}

//function previous slide
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
    } else {
        currentSlide--;
        checker();
    }
}
function checker() {
    // set the slide number
    slideNumberElement.textContent = `Slide # ${currentSlide} of ${slidesCount}`;

    // remove all active classes
    removeActive();

    //set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");

    // set active class on current pagitem
    pagCreatedUl.children[currentSlide - 1].classList.add("active");

    // check if its first slide
    if (currentSlide == 1) {
        //add disabled class to prev button
        prevButton.classList.add("disabled");
    } else {
        //remove disabled class to prev button
        prevButton.classList.remove("disabled");
    }

    // check if its last slide
    if (currentSlide == slidesCount) {
        //add disabled class to next button
        nextButton.classList.add("disabled");
    } else {
        //remove disabled class to next button
        nextButton.classList.remove("disabled");
    }
}
function removeActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove("active");
    });
    pagBullets.forEach(function (bullet) {
        bullet.classList.remove("active");
    });
}
