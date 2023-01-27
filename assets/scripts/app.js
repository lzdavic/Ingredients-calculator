const form = document.getElementById('#form');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ingredientName = e.target.elements('#ingredient-name');
    const ingredientQuantity = e.target.elements('#ingredient-quantity');
    const ingredientUnity = e.target.elements('#quantity-type');
    const ingredientItem = {
        'name': ingredientName.value,
        'quantity': ingredientQuantity.value,
        'unity': ingredientUnity.vale
    }
    console.log(ingredientItem)
});
