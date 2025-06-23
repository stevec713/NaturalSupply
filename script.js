"use strict";

function displayCart() {
    let output = "";
    for (let item in itemList) {
        output +=  item + ": $" + itemList[item].price.toFixed(2) + itemList[item].quantity + "<br>";
    }
    document.querySelector("form p").innerHTML = output;
}

function changeCart() {
    if (this.name in itemList) {
        delete itemList[this.name];
    }
    else {
        itemList[this.name] = {
            price: parseFloat(this.value),
            quantity: 1
        }
    }
    displayCart();
}

let itemList = {};

let buttons = document.querySelectorAll("article button")
for (let button of buttons) {
    button.addEventListener("click", changeCart);
}
