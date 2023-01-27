const ingredientName = document.getElementById('#ingredient-name');
const ingredientQuantity = document.getElementById('ingredient-quantity');
const ingredientUnity = document.getElementById('quantity-type');

const buttonAdd = document.getElementById('#button-add');

const ingredientItem = ingredientName.value + ingredientQuantity.value + ingredientUnity.value;
console.log(ingredientItem);

// buttonAdd.addEventListener("submit", => (event) {
//     event.preventDefault();
// })



