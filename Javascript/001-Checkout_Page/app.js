"use strict";

//* Variables

const container = document.querySelector(".container .row");

const product = document.querySelector(".product");
const productURL = document.querySelector(".product-URL");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productOldprice = document.querySelector(".product-oldprice");
const btnDecrement = document.querySelector(".product-decrement");
const productAmount = document.querySelector(".product-amount");
const btnIncrement = document.querySelector(".product-increment");
const btnAdd = document.querySelector(".product-add");
const productTotalPrice = document.querySelector(".product-total-price");

//* Product Content

// ? const productContent = [productURL, productName, productPrice, productOldprice, productAmount, productTotalPrice]

const product1 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product2 = ["./IMG/photo2.png", "Levi Shoes", 25.98, 34.99, 0, 0];
const product3 = ["./IMG/photo3.jpg", "Antique Clock", 25.98, 34.99, 0, 0];
const product4 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product5 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product6 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product7 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product8 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product9 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
const product10 = ["./IMG/photo1.png", "Vintage Bag", 25.98, 34.99, 0, 0];
let productID = 0;
const addCarts = function (product) {
  const contentHTML = `
  <div class="card my-3 p-3 col-12" style="max-width: 990px">
    <div class="row g-0 flex-sm-column flex-md-row">
      <div class="col-12 col-md-4 d-flex justify-content-center">
        <img
          src= ${product[0]}
          class="img-fluid rounded-3 m-sm-4 m-md-0 product-URL"
          alt=""
        />
      </div>
      <div class="col-12 col-md-8">
        <div class="card-body">
          <h5
            class="card-title text-center text-md-start product-name"
          >
            ${product[1]}
          </h5>
          <p class="card-title text-center text-md-start">
            <b>$</b><strong class="product-price">${product[2]}</strong>
            <small><del class="product-oldprice">${product[3]}</del></small>
          </p>
          <div class="row">
            <div class="btn-group me-2 col-6 offset-3 offset-md-0">
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
              ${product[4]}
              </button>
              <button
                type="button"
                class="btn btn-secondary rounded-2 product-increment"
              >
                +
              </button>
              <button
                type="button"
                class="btn btn-success ms-4 rounded-2 product-add"
              >
                Add
              </button>
            </div>
            <div class="row">
              <p class="card-text text-center text-md-start mt-4">
                Product1 Total: <b>$</b
                ><strong class="product-total-price">${product[5]}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  const newProduct = document.createElement("section");
  newProduct.classList.add(`product${++productID}`);
  newProduct.innerHTML = contentHTML;
  container.append(newProduct);
};

addCarts(product1);
addCarts(product2);
addCarts(product3);

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
    productURL.src,
    productPrice.textContent,
    productOldPrice.textContent,
    productAmount.textContent,
    productTotalPrice.textContent,
  ]);

  localStorage.setItem("counter", counter);
};

const temp = document.querySelectorAll("section");

container.addEventListener("click", (e) => {
  for (let i = 1; i <= temp.length; i++) {
    const p = e.target.closest("section");
    const productAmount = p.querySelector(".product-amount");
    const productPrice = p.querySelector(".product-price");
    const productTotalPrice = p.querySelector(".product-total-price");
    const productURL = p.querySelector(".product-URL");
    const productName = p.querySelector(".product-name");
    const productOldprice = p.querySelector(".product-oldprice");

    if (e.target.closest("section").classList.contains(`product${i}`)) {
      if (e.target === p.querySelector(".product-decrement")) {
        if (productAmount.textContent > 0) {
          removeItemMain(productAmount, productTotalPrice, productPrice);
        } else removeCart(p, productTotalPrice);
      } else if (e.target === p.querySelector(".product-increment")) {
        addItemMain(productAmount, productTotalPrice, productPrice);
      } else if (e.target === p.querySelector(".product-add")) {
        productAmount.textContent > 0 &&
          addCart(
            productName,
            productURL,
            productPrice,
            productOldprice,
            productAmount,
            productTotalPrice
          );
        productAmount.textContent = productTotalPrice.textContent = 0;
      }
    }
  }
});

// product11.addEventListener("click", (e) => {
//   if (e.target.classList.contains("product11-decrement")) {
//     if (product11Amount.textContent != 0) {
//       removeItemMain(product11Amount, product11TotalPrice, product11Price);
//     }
//   } else if (e.target.classList.contains("product11-increment")) {
//     addItemMain(product11Amount, product11TotalPrice, product11Price);
//   } else if (e.target.classList.contains("product11-add")) {
//     addCart(
//       product11Name,
//       product11URL,
//       product11Price,
//       product11OldPrice,
//       product11Amount,
//       product11TotalPrice
//     );
//   }
// });
// product12.addEventListener("click", (e) => {
//   if (e.target.classList.contains("product12-decrement")) {
//     if (product12Amount.textContent != 0) {
//       removeItemMain(product12Amount, product12TotalPrice, product12Price);
//     }
//   } else if (e.target.classList.contains("product12-increment")) {
//     addItemMain(product12Amount, product12TotalPrice, product12Price);
//   } else if (e.target.classList.contains("product12-add")) {
//     addCart(
//       product12Name,
//       product12URL,
//       product12Price,
//       product12OldPrice,
//       product12Amount,
//       product12TotalPrice
//     );
//   }
// });
// product13.addEventListener("click", (e) => {
//   if (e.target.classList.contains("product13-decrement")) {
//     if (product13Amount.textContent != 0) {
//       removeItemMain(product13Amount, product13TotalPrice, product13Price);
//     }
//   } else if (e.target.classList.contains("product13-increment")) {
//     addItemMain(product13Amount, product13TotalPrice, product13Price);
//   } else if (e.target.classList.contains("product13-add")) {
//     addCart(
//       product13Name,
//       product13URL,
//       product13Price,
//       product13OldPrice,
//       product13Amount,
//       product13TotalPrice
//     );
//   }
// });
