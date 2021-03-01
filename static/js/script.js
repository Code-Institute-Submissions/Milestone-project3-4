//All recipes and my recipes//

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


//mobile menu//


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




//Click effect filter//

let clickFilter = document.getElementById("choose-category");
let nav = document.querySelector("#choose-category-container nav");
clickFilter.addEventListener("click", filterOptions);
function filterOptions() {
    if (nav.style.display != "block") {
        clickFilter.nextElementSibling.style.display = "block";
    }
    else {
        clickFilter.nextElementSibling.style.display = "none";
    }
}