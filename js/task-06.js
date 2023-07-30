const textInput = document.querySelector("input");
const dataLength = textInput.dataset.length;

textInput.addEventListener("blur", () => {
  if (Number(textInput.value.length) === Number(dataLength)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
