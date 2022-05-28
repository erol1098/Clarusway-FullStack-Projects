"use strict";

//* Variables
const cart = document.querySelector(".cart");

const product1 = document.querySelector(".product1");
const product2 = document.querySelector(".product2");
const product3 = document.querySelector(".product3");

const product1Price = document.querySelector(".product1-price");
const product2Price = document.querySelector(".product2-price");
const product3Price = document.querySelector(".product3-price");

const product1Decrement = document.querySelector(".product1-decrement");
const product2Decrement = document.querySelector(".product2-decrement");
const product3Decrement = document.querySelector(".product3-decrement");

const product1Amount = document.querySelector(".product1-amount");
const product2Amount = document.querySelector(".product2-amount");
const product3Amount = document.querySelector(".product3-amount");

const product1Increment = document.querySelector(".product1-increment");
const product2Increment = document.querySelector(".product2-increment");
const product3Increment = document.querySelector(".product3-increment");

const product1Remove = document.querySelector(".product1-remove");
const product2Remove = document.querySelector(".product2-remove");
const product3Remove = document.querySelector(".product3-remove");

const product1TotalPrice = document.querySelector(".product1-total-price");
const product2TotalPrice = document.querySelector(".product2-total-price");
const product3TotalPrice = document.querySelector(".product3-total-price");

const subtotal = document.querySelector(".subtotal-price");
const tax = document.querySelector(".tax-price");
const shipping = document.querySelector(".shipping-price");
const total = document.querySelector(".total-price");

const allProduct = Object.keys(localStorage);
allProduct.splice(allProduct.indexOf("counter"), 1);
allProduct.forEach((key) => {
  const product = localStorage.getItem(key);
  const arr = product.split(",");
  const newDiv = document.createElement("section");
  newDiv.classList.add(`${key}`, "row", "justify-content-center");

  newDiv.innerHTML = `<div class="card my-3 p-3 col-8">
  <div class="row g-0 flex-sm-column flex-md-row">
    <div class="col-12 col-md-4 d-flex justify-content-center">
      <img
        src="${arr[1]}"
        class="img-fluid rounded-3 m-sm-4 m-md-0"
        alt="vintage-backbag"
      />
    </div>
    <div class="col-12 col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center text-md-start product-name">
          ${arr[0]}
        </h5>
        <p class="card-title text-center text-md-start">
          <b>$</b><strong class="product-price">${arr[2]}</strong>
          <small><del class="product-oldprice">$${arr[3]}</del></small>
        </p>
        <div class="row">
          <div class="btn-group me-2 col-6 offset-2 offset-md-0">
            <button
              type="button"
              class="btn btn-secondary rounded-2 product-decrement"
            >
              -
            </button>
            <button
              type="button"
              class="btn btn-secondary disabled bg-body text-black border-0 product-amount"
            >
              ${arr[4]}
            </button>
            <button
              type="button"
              class="btn btn-secondary rounded-2 product-increment"
            >
              +
            </button>
            <button
              type="button"
              class="btn btn-danger ms-4 rounded-2 product-remove"
            >
              Remove
            </button>
          </div>
          <div class="row">
            <p class="card-text text-center text-md-start mt-4">
              Product Total: <b>$</b
              ><strong class="product-total-price">${arr[5]}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  cart.append(newDiv);
});

const removeItem = function (productAmount, productTotalPrice, productPrice) {
  productAmount.textContent = +productAmount.textContent - 1;
  productTotalPrice.textContent = (
    +productTotalPrice.textContent - +productPrice.textContent
  ).toFixed(2);
  subtotal.textContent = (
    +subtotal.textContent - +productPrice.textContent
  ).toFixed(2);
  tax.textContent = (
    +tax.textContent -
    +productPrice.textContent * 0.18
  ).toFixed(2);
  total.textContent = (+subtotal.textContent + +tax.textContent).toFixed(2);
};

const addItem = function (productAmount, productTotalPrice, productPrice) {
  productAmount.textContent = +productAmount.textContent + 1;
  productTotalPrice.textContent = (
    +productAmount.textContent * +productPrice.textContent
  ).toFixed(2);
  subtotal.textContent = (
    +subtotal.textContent + +productPrice.textContent
  ).toFixed(2);
  tax.textContent = (
    +tax.textContent +
    +productPrice.textContent * 0.18
  ).toFixed(2);
  total.textContent = (+subtotal.textContent + +tax.textContent).toFixed(2);
};

const addShipping = function () {
  +total.textContent === 0
    ? (shipping.textContent = 0)
    : +total.textContent < 100
    ? (shipping.textContent = 10)
    : (shipping.textContent = 0);

  total.textContent = +total.textContent + +shipping.textContent;
};
const removeCart = function (product, productTotalPrice) {
  subtotal.textContent = (
    +subtotal.textContent - +productTotalPrice.textContent
  ).toFixed(2);
  tax.textContent = (
    +tax.textContent -
    +productTotalPrice.textContent * 0.18
  ).toFixed(2);
  total.textContent = (
    +total.textContent -
    +productTotalPrice.textContent * 0.18 -
    +productTotalPrice.textContent
  ).toFixed(2);
  total.textContent = +total.textContent - shipping.textContent;
  shipping.textContent = (0).toFixed(2);
  {
    +total.textContent < 0.1 ? (total.textContent = (0).toFixed(2)) : null;
    +tax.textContent < 0.1 ? (tax.textContent = (0).toFixed(2)) : null;
  }
  product.innerHTML = "";
};

const temp = document.querySelectorAll("section");
let l = temp.length;
let s = 1;

temp.forEach((product) => {
  let x = s <= l ? l++ : s;
  product.addEventListener("click", (e) => {
    if (e.target.closest("section").classList.contains(`product${x}`)) {
      console.log("cli");
    }
  });
});

product1.addEventListener("click", (e) => {
  if (e.target.classList.contains("product1-decrement")) {
    if (product1Amount.textContent != 0) {
      removeItem(product1Amount, product1TotalPrice, product1Price);
      addShipping();
    }
  } else if (e.target.classList.contains("product1-increment")) {
    addItem(product1Amount, product1TotalPrice, product1Price);
    addShipping();
  } else if (e.target.classList.contains("product1-remove")) {
    removeCart(product1, product1TotalPrice);
  }
});
product2.addEventListener("click", (e) => {
  if (e.target.classList.contains("product2-decrement")) {
    if (product2Amount.textContent != 0) {
      removeItem(product2Amount, product2TotalPrice, product2Price);
      addShipping();
    }
  } else if (e.target.classList.contains("product2-increment")) {
    addItem(product2Amount, product2TotalPrice, product2Price);
    addShipping();
  } else if (e.target.classList.contains("product2-remove")) {
    removeCart(product2, product2TotalPrice);
  }
});
product3.addEventListener("click", (e) => {
  if (e.target.classList.contains("product3-decrement")) {
    if (product3Amount.textContent != 0) {
      removeItem(product3Amount, product3TotalPrice, product3Price);
      addShipping();
    }
  } else if (e.target.classList.contains("product3-increment")) {
    addItem(product3Amount, product3TotalPrice, product3Price);
    addShipping();
  } else if (e.target.classList.contains("product3-remove")) {
    removeCart(product3, product3TotalPrice);
  }
});
