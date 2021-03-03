//The accordions//

let a = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {

        this.classList.toggle("active");

        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }
    });
}

//Click effect filter//

let clickFilter = document.getElementById("choose-category");
let nav = document.querySelector("#choose-category-container nav");
if(clickFilter != null){
clickFilter.addEventListener("click", filterOptions);
}
function filterOptions() {
    if (nav.style.display != "block") {
        clickFilter.nextElementSibling.style.display = "block";
    }
    else {
        clickFilter.nextElementSibling.style.display = "none";
    }
}