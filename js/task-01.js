const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const elements = categories.querySelectorAll(".item");
elements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  const list = element.querySelector("ul");
  console.log(`Elements: ${list.children.length}`);
});
