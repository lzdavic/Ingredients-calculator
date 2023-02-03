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
        <p class="item"><span class=item-name>${name}</span> - <span class="item-quantity">${quantity}</span> <span class="item-unity">${unity}</span></p>`;

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



const btnCalculate = document.getElementById("calculate");

btnCalculate.addEventListener('click', () => {
    // find the selected radio button value
    const operation = document.querySelector('input[name="operation"]:checked').value;
    const factor = document.getElementById("factor").value;

    calculate(operation, factor);
})

function calculate(operation, factor) {
    var ingredientItens = document.querySelectorAll(".ingredients__item")
    const resultsList = document.getElementById("results");

    resultsList.innerHTML = ""

    ingredientItens.forEach(element => {
        let name = element.querySelector(".item-name").textContent;
        let quantity = element.querySelector(".item-quantity").textContent;
        let unity = element.querySelector(".item-unity").textContent;
        


        if (operation == "/") {
            quantity = quantity / factor;
        }

        if (operation == "*") {
            quantity = quantity * factor;
        }

        const newLi = document.createElement("li");
        newLi.classList.add("results__item");
        newLi.innerHTML = `
        <input type="checkbox">
        <p class="item"><span class=item-name>${name}</span> - <span class="item-quantity">${quantity}</span> <span class="item-unity">${unity}</span></p>`;

        resultsList.appendChild(newLi);
    });
}