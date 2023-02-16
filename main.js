const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector("nav");
openNav.addEventListener("click", function() {
    nav.style.display = "block";
});
closeNav.addEventListener("click", function() {
    nav.style.display = "none";
});

// 
const reviews = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(this.id == review.dataset.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

//
const categories = Array.from(document.querySelectorAll(".categories span"));
const projects = Array.from(document.querySelectorAll(".projects .project"));
categories.forEach(category => {
    category.addEventListener("click", function() {
        for(let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
        }
        projects.forEach(p => {
            if(this.id == p.dataset.id && this.id != "all") {
                p.classList.remove("hide");
            } else if(this.id == "all") {
                p.classList.remove("hide");
            } else {
                p.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

//go up
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY <= 200) {
        goUp.style.opacity = "0";
    } else if(this.scrollY > 200) {
        goUp.style.opacity = "1";
    }
});



