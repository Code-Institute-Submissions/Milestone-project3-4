//New ingredients//

let addNew = document.getElementById("add-ingredient");

addNew.addEventListener("click", function () {
    let a = document.createElement("input");
    let b = document.getElementById("container-new-ingredient");
    a.setAttribute("class", "ingredient-field");
    a.setAttribute("name", "ingredient");
    a.setAttribute("type", "text");

    b.appendChild(a);
});

let removeIngredient = document.getElementById("remove-ingredient");
removeIngredient.addEventListener("click", function () {
    let ingredientContainer = document.getElementById("container-new-ingredient");
    ingredientContainer.removeChild(ingredientContainer.lastChild);
});

//New cooking step//

let addNewPrep = document.getElementById('add-preparation-step');
addNewPrep.addEventListener("click", function () {
    let c = document.createElement("input");
    let d = document.getElementById("container-new-prep");
    c.setAttribute("class", "add-prep");
    c.setAttribute("name", "add-prep");
    c.setAttribute("type", "text");

    d.appendChild(c);
});

let removePrep = document.getElementById("remove-prep");
removePrep.addEventListener("click", function () {
    let prepContainer = document.getElementById("container-new-prep");
    prepContainer.removeChild(prepContainer.lastElementChild);
});