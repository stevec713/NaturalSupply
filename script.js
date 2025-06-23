"use strict";

function displayCart() {
    let output = "";
    for (let item in itemList) {
        output +=  item + ": $" + itemList[item].price.toFixed(2) + "<br>";
    }
    document.querySelector("form p").innerHTML = output;
}

function changeCart() {
    if (this.name in itemList) {
        delete itemList[this.name];
    }
    else {
        itemList[this.name] = {
            price: parseFloat(this.value)
        }
    }
    displayCart();
    calculateTotal();
}

function calculateTotal() {
    let subtotalElement = document.querySelector("dd:first-of-type");
    let taxElement = document.querySelector("dd:nth-of-type(2)");
    let shippingElement = document.querySelector("dd:nth-of-type(3)");
    let totalElement = document.querySelector("dd:last-of-type");

    total = 0;
    subtotal = 0;
    for (let item in itemList) {
        subtotal += itemList[item].price;
    }
    total = subtotal + (subtotal * tax) + shipping;

    subtotalElement.innerHTML = "$" + subtotal.toFixed(2);
    taxElement.innerHTML = (tax * 100).toFixed(2) + "%";
    shippingElement.innerHTML = "$" + shipping.toFixed(2);
    totalElement.innerHTML = "$" + total.toFixed(2);
}

let subtotal = 0;
let tax = .07;
let shipping = 10;
let total = 0;

let itemList = {};

let itemButtons = document.querySelectorAll("article button")
for (let itemButton of itemButtons) {
    itemButton.addEventListener("click", changeCart);
}