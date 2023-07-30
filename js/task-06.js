const textInput = document.querySelector("input");
const dataLength = textInput.dataset.length;

textInput.addEventListener("blur", () => {
  console.log(textInput.value.length);
  console.log(dataLength);
  if (Number(textInput.value.length) == dataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
