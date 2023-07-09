function focused() {
  let highlightedElements = document.querySelectorAll("div div");
  let inputElements = document.querySelectorAll('input[type="text"]');
  console.log(highlightedElements);
  console.log(inputElements);
  for (let element of inputElements)
    element.addEventListener("focus", (event) => {
      event.target.parentElement.className = "focused";
    });
  for (let element of inputElements)
    element.addEventListener("blur", (event) => {
      event.target.parentElement.className = "none";
    });
}
