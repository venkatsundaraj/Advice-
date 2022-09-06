"use strict";
const btn = document.querySelector(".btn");
const adviceContainer = document.querySelector('.advice-container');

const giveAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const adviced = await res.json();
  const { advice } = adviced.slip;
  console.log(advice);
  adviceContainer.textContent = advice
};

btn.addEventListener("click", giveAdvice);

