let estimateShippingAndTaxListItem = document.getElementById("li-calculate");

let conditionalListItems = document.getElementsByClassName(
  "conditional-list-item"
);

function openThreeInputs() {
  let symbol = estimateShippingAndTaxListItem.lastElementChild;
  symbol.textContent = "X";
  symbol.classList.add("symbol");
  estimateShippingAndTaxListItem.classList.add("green");
  for (let li of conditionalListItems) {
    li.classList.add("display-flex");
  }
}

estimateShippingAndTaxListItem.addEventListener("click", openThreeInputs);
