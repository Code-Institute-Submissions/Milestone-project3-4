function newIngredients() {
    let a = document.getElementById("container-new-ingredient");

    let b = document.createElement("input");
    b.setAttribute("placeholder", "Add ingredient");
    b.setAttribute("class", "ingredient-field");
    b.setAttribute("name", "ingredient");
    b.setAttribute("type", "text");


    let c = document.createElement("i");
    c.setAttribute("class", "fas fa-minus");

    a.appendChild(b);
    a.appendChild(c);

    minus = document.getElementsByClassName("fas fa-minus");
    console.log(minus);
    for (i = 0; i < minus.length; i++) {
        minus[i].addEventListener("click", removeIngredient);
    }
}


function removeIngredient(event) {

    event.target.previousElementSibling.remove();
    event.target.remove();
    console.log("hi");

}















