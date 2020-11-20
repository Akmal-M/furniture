const filterButtons = document.querySelector("#filter-btn").children;
const items = document.querySelector(".all").children;

const navbarButtons = document.querySelector("#navbar-btn").children;


for(let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for(let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for(let k = 0; k < items.length; k++) {
            items[k].style.display="none";
            if(target == items[k].getAttribute("data-id"))
            {
                items[k].style.display="block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}



function changeSlide() {

    controlButtons = document.querySelector(".slide-controls").children;

    for (let i = 0; i < controlButtons.length; i++) {
              controlButtons[i].classList.remove("active")
    }
    controlButtons[currentSlide].classList.add("active")

    sliderContainer.style.marginLeft =- (containerWidth*currentSlide) + "px";
}















// // lightbox

const closeLightbox = document.querySelector(".close-lightbox");
// close light box when click to close






const lightbox = document.querySelector(".lightbox");

const lightboxImage = lightbox.querySelector("img")

// if u wanna close lightbox by clicking outside of image then
lightbox.addEventListener("click", function(){
    if(event.target != lightboxImage) {
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
})
// try it


    closeLightbox.addEventListener("click", function(){
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    })

    // click to plus icon show lightbox

    const gallery = document.querySelector(".all")
    const galleryItem = gallery.querySelectorAll(".item");

    galleryItem.forEach(function(element){
        element.querySelector("img").addEventListener("click", function(){
            lightbox.classList.remove("hide");
            lightbox.classList.add("show");
            lightboxImage.src = element.querySelector("img").getAttribute("src")
        })
    })
