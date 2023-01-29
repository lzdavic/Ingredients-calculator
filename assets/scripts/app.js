const form = document.getElementById('#form');
const ingredientList = document.getElementById

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ingredientName = form.getElementById('#ingredient-name').value;
        const ingredientQuantity = form.getElementById('#ingredient-quantity').value;
        const ingredientUnity = form.getElementById('#quantity-type').value;

        createIngredient(ingredientName, ingredientQuantity, ingredientUnity);
    });
}

function createIngredient(name, quantity, unity) {
    var ingredientItem = `<li class="ingredients__item">
                        <button id="exclude" class="exclude-button">X</button>
                        <p>${name} ${quantity}${unity}</p>
                        </li>`

    ingredientList.appendChild = ingredientItem
}   