let estimateShippingAndTaxListItem = document.getElementById("li-calculate");

let conditionalListItems = document.getElementsByClassName(
  "conditional-list-item"
);

let i = 0;

function openOrCloseInputs() {
  let symbol = estimateShippingAndTaxListItem.lastElementChild;
  if (i === 0 || i%2 === 0) {
    symbol.textContent = "X";
    symbol.classList.add("symbol");
    estimateShippingAndTaxListItem.classList.add("green");
    for (let li of conditionalListItems) {
      li.classList.add("display-flex");
    }
  } else {
    symbol.innerHTML = "<p>&#10133;</p>";
    symbol.classList.remove("symbol");
    estimateShippingAndTaxListItem.classList.remove("green");
    for (let li of conditionalListItems) {
      li.classList.remove("display-flex");
    }
  }
  i++;
}

estimateShippingAndTaxListItem.addEventListener(
  "click",
  openOrCloseInputs
);
