"use strict";
const body = document.querySelector("body");
const btn = document.querySelector(".dark-mode");
const navBar = document.querySelectorAll(".navbar-links"); // Tüm "a" elementlerini yakalıyoruz.

btn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // querySelectorAll(), yakaladığımız "a" elementlerini array olarak işlem yapabileceğimiz bir formatta tutar. Bu arrayde forEach ile herbir "a" elementine işlem yapabiliriz.
  navBar.forEach((element) => {
    element.classList.toggle("dark");
  });
});
