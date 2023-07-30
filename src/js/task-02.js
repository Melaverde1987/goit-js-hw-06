const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arr = [];

const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  let el = document.createElement("li");
  el.classList.add("item");
  el.textContent = ingredients[i];
  arr.push(el);
}

list.append(...arr);
