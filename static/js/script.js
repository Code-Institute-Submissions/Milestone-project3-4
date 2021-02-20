//Add new ingredients//

function newIngredients() {
    let a = document.getElementById("container-new-ingredient");

    let b = document.createElement("input");
    b.setAttribute("class", "ingredient-field");
    b.setAttribute("name", "ingredient");
    b.setAttribute("type", "text");


    let c = document.createElement("i");
    c.setAttribute("class", "fas fa-minus");

    a.appendChild(b);
    a.appendChild(c);

    minus = document.getElementsByClassName("fas fa-minus");
    for (i = 0; i < minus.length; i++) {
        minus[i].addEventListener("click", removeIngredient);
    }
}


function removeIngredient(event) {

    event.target.previousElementSibling.remove();
    event.target.remove();

}

//Nev preparation step//

function newPrep() {
    let a = document.getElementById("container-new-prep");

    let b = document.createElement("input");
    b.setAttribute("class", "add-prep");
    b.setAttribute("name", "add-prep");
    b.setAttribute("type", "text");


    let c = document.createElement("i");
    c.setAttribute("class", "fas fa-minus");

    a.appendChild(b);
    a.appendChild(c);

    minus = document.getElementsByClassName("fas fa-minus");
    for (i = 0; i < minus.length; i++) {
        minus[i].addEventListener("click", removeIngredient);
    }
}


//All recipies//

let a = document.getElementsByClassName("accordion-container");

function myFunc(accordion) {
    if (accordion.nextElementSibling.style.display == "none") {
        accordion.nextElementSibling.style.display = "block";
    }
    else {
        accordion.nextElementSibling.style.display = "none";
    }
}


for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        myFunc(a[i]);
    })
}

let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", openMobileMenu);

function openMobileMenu(){
    let mobileNav = document.getElementById("mobile-nav");
    if(mobileNav.style.display == "none"){
        mobileNav.style.display = "block";
    }
    else{
        mobileNav.style.display = "none"
    }
}




