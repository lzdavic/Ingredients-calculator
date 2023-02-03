const form = document.getElementById("form");
const select = document.getElementById("ingredient-unity");

// Update dropdown menu value when it's selection changes
select.addEventListener("change", () => {
    unity = select.value;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("ingredient-name").value;
    const quantity = document.getElementById("ingredient-quantity").value;

    const newLi = document.createElement("li");
    newLi.classList.add("ingredients__item");
    newLi.innerHTML = `
        <button id="exclude" class="exclude-button">X</button>
        <p><span id=item-name>${name}</span> - <span id="item-quantity">${quantity}</span> <span id="item-unity">${unity}</span></p>`;

    const list = document.getElementById("ingredients");
    list.appendChild(newLi);

    

    // exclude each item
    const excludeButtons = document.querySelectorAll(".exclude-button");
    excludeButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            this.parentElement.remove();
        })
    })

    // Loop over each input and clear its value
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    })

    const add = document.getElementById("button-add");
    add.value = "ADD"
});