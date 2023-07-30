const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0;

buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
});

buttonPlus.addEventListener("click", () => {
  counterValue += 1;
  value.innerHTML = counterValue;
});
