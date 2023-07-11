function addItem() {
  let menuElement = document.getElementById("menu");
  let textInputElement = document.getElementById("newItemText");
  let itemInputElement = document.getElementById("newItemValue");
  let newElement = document.createElement("option");
  newElement.value = itemInputElement.value;
  newElement.textContent = textInputElement.value;
  menuElement.appendChild(newElement);
  textInputElement.value = "";
  itemInputElement.value = "";
}
