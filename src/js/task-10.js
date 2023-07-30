function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = "";
  let width = 30;
  let height = 30;
  let color = getRandomHexColor();

  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;
    markup += `<div class="boxes-item" style="background-color: ${color}; width: ${width}px; height: ${height}px"></div>`;
  }
  return markup;
}

function destroyBoxes() {
  let markup = "";
  return markup;
}

const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

btnCreate.addEventListener("click", () => {
  const inputValue = input.value;
  boxes.insertAdjacentHTML("beforeend", createBoxes(inputValue));
});

btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = destroyBoxes();
});
