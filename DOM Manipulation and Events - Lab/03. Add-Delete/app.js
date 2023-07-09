function addItem() {
  let inputElement = document.getElementById("newItemText");
  let liElements = document.getElementById("items");
  let newEl = document.createElement("li");
  newEl.textContent = inputElement.value;
  let deleteElement = document.createElement("a");
  deleteElement.href = '#';
  deleteElement.textContent = "[Delete]";
  deleteElement.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });
  newEl.appendChild(deleteElement);
  liElements.appendChild(newEl);
}
