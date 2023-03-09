const btnCalculate = document.getElementById("calculate");
btnCalculate.addEventListener('click', () => {
    // find the selected radio button value [operation to use when calculate]
    const operation = document.querySelector('input[name="operation"]:checked').value;
    const factor = document.getElementById("factor").value;

    calculate(operation, factor);
});
function calculate(operation, factor) {
    var ingredientItens = document.querySelectorAll(".ingredients__item");
    const resultsList = document.getElementById("results");

    resultsList.innerHTML = "";

    ingredientItens.forEach(element => {
        // get string on each value of the current item to further math operations
        let name = element.querySelector(".item-name").textContent;
        let quantity = element.querySelector(".item-quantity").textContent;
        let unity = element.querySelector(".item-unity").textContent;
        let roundTo = 1;

        // calculus
        if (operation == "/") {
            quantity = quantity / factor;
        }

        if (operation == "*") {
            quantity = quantity * factor;
        }
        // converts mg/kg more tan 1000mg or less tan a kg
        if (quantity >= 1000 && unity === 'mg') {
            quantity = quantity / 1000;
            unity = 'kg';
            roundTo = 2;

        } else if (quantity < 1 && unity === 'kg') {
            quantity = quantity * 1000;
            unity = 'mg';
            roundTo = 0;
        }

        // converts ml/l more tan 1000ml and less tan a l
        if (quantity >= 1000 && unity === 'ml') {
            quantity = quantity / 1000;
            unity = 'l';
            roundTo = 2;
        } else if (quantity < 1 && unity === 'l') {
            quantity = quantity * 1000;
            unity = 'ml';
            roundTo = 0;

        }

        // create li element to build results lists
        const newLi = document.createElement("li");
        newLi.classList.add("results__item");
        newLi.innerHTML = `
        <input type="checkbox">
        <p class="item"><span class=item-name>${name}</span> - <span class="item-quantity">${quantity.toFixed(roundTo)}</span> <span class="item-unity">${unity}</span></p>`;

        resultsList.appendChild(newLi);
    });
}
