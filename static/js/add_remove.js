//New ingredients//

let addNew = document.getElementById("addIngredient");

addNew.addEventListener("click", function () {
    let a = document.createElement("input");
    let b = document.getElementById("container-new-ingredient");
    a.setAttribute("class", "ingredient-field");
    a.setAttribute("name", "ingredient");
    a.setAttribute("type", "text");

    b.appendChild(a);
})

let removeIngredient = document.getElementById("removeIngredient");
removeIngredient.addEventListener("click", function (){
    let ingredientContainer = document.getElementById("container-new-ingredient");
    ingredientContainer.removeChild(ingredientContainer.lastChild);
})

//New step//

let addNewPrep = document.getElementById('add-preparation-step');
addNewPrep.addEventListener("click", function (){
    let a = document.createElement("input");
    let b = document.getElementById("container-new-prep");
    a.setAttribute("class", "add-prep");
    a.setAttribute("name", "add-prep");
    a.setAttribute("type", "text");

    b.appendChild(a);
})

let removePrep = document.getElementById("remove-prep");
removePrep.addEventListener("click", function () {
    let prepContainer = document.getElementById("container-new-prep");
    prepContainer.removeChild(prepContainer.lastElementChild);
})