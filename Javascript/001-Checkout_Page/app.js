"use strict";

//* Variables

const product11 = document.querySelector(".product11");
const product12 = document.querySelector(".product12");
const product13 = document.querySelector(".product13");

const product11Name = document.querySelector(".product11-name");
const product12Name = document.querySelector(".product12-name");
const product13Name = document.querySelector(".product13-name");

const product11URL = document.querySelector(".product11-URL").src;
const product12URL = document.querySelector(".product12-URL").src;
const product13URL = document.querySelector(".product13-URL").src;

const product11Price = document.querySelector(".product11-price");
const product12Price = document.querySelector(".product12-price");
const product13Price = document.querySelector(".product13-price");

const product11OldPrice = document.querySelector(".product11-oldprice");
const product12OldPrice = document.querySelector(".product12-oldprice");
const product13OldPrice = document.querySelector(".product13-oldprice");

const product11Decrement = document.querySelector(".product11-decrement");
const produc1t2Decrement = document.querySelector(".product12-decrement");
const produc1t3Decrement = document.querySelector(".product13-decrement");

const product11Amount = document.querySelector(".product11-amount");
const product12Amount = document.querySelector(".product12-amount");
const product13Amount = document.querySelector(".product13-amount");

const product11Increment = document.querySelector(".product11-increment");
const product12Increment = document.querySelector(".product12-increment");
const product13Increment = document.querySelector(".product13-increment");

const product11Add = document.querySelector(".product11-add");
const product12Add = document.querySelector(".product12-add");
const product13Add = document.querySelector(".product13-add");

const product11TotalPrice = document.querySelector(".product11-total-price");
const product12TotalPrice = document.querySelector(".product12-total-price");
const product13TotalPrice = document.querySelector(".product13-total-price");

let counter;
const removeItemMain = function (
  productAmount,
  productTotalPrice,
  productPrice
) {
  productAmount.textContent = +productAmount.textContent - 1;
  productTotalPrice.textContent = (
    +productTotalPrice.textContent - +productPrice.textContent
  ).toFixed(2);
};

const addItemMain = function (productAmount, productTotalPrice, productPrice) {
  productAmount.textContent = +productAmount.textContent + 1;
  productTotalPrice.textContent = (
    +productAmount.textContent * +productPrice.textContent
  ).toFixed(2);
};

counter = localStorage.getItem("counter") ? localStorage.getItem("counter") : 0;
const addCart = function (
  productName,
  productURL,
  productPrice,
  productOldPrice,
  productAmount,
  productTotalPrice
) {
  localStorage.setItem(`product${++counter}`, [
    productName.textContent,
    productURL,
    productPrice.textContent,
    productOldPrice.textContent,
    productAmount.textContent,
    productTotalPrice.textContent,
  ]);

  localStorage.setItem("counter", counter);
};
product11.addEventListener("click", (e) => {
  if (e.target.classList.contains("product11-decrement")) {
    if (product11Amount.textContent != 0) {
      removeItemMain(product11Amount, product11TotalPrice, product11Price);
    }
  } else if (e.target.classList.contains("product11-increment")) {
    addItemMain(product11Amount, product11TotalPrice, product11Price);
  } else if (e.target.classList.contains("product11-add")) {
    addCart(
      product11Name,
      product11URL,
      product11Price,
      product11OldPrice,
      product11Amount,
      product11TotalPrice
    );
  }
});
product12.addEventListener("click", (e) => {
  if (e.target.classList.contains("product12-decrement")) {
    if (product12Amount.textContent != 0) {
      removeItemMain(product12Amount, product12TotalPrice, product12Price);
    }
  } else if (e.target.classList.contains("product12-increment")) {
    addItemMain(product12Amount, product12TotalPrice, product12Price);
  } else if (e.target.classList.contains("product12-add")) {
    addCart(
      product12Name,
      product12URL,
      product12Price,
      product12OldPrice,
      product12Amount,
      product12TotalPrice
    );
  }
});
product13.addEventListener("click", (e) => {
  if (e.target.classList.contains("product13-decrement")) {
    if (product13Amount.textContent != 0) {
      removeItemMain(product13Amount, product13TotalPrice, product13Price);
    }
  } else if (e.target.classList.contains("product13-increment")) {
    addItemMain(product13Amount, product13TotalPrice, product13Price);
  } else if (e.target.classList.contains("product13-add")) {
    addCart(
      product13Name,
      product13URL,
      product13Price,
      product13OldPrice,
      product13Amount,
      product13TotalPrice
    );
  }
});
