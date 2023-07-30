const textInput = document.querySelector("input");
const dataLength = textInput.dataset.length;

textInput.addEventListener("blur", () => {
  if (textInput.value.length === dataLength) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
});
