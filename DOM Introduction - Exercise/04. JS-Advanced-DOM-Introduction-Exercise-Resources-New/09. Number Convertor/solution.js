function solve() {
    let decimalInput = document.getElementById("input");
    let fromSelect = document.getElementById("selectMenuFrom");
    let toSelect = document.getElementById("selectMenuTo");
    let convertButton = document.querySelector("button");
    let resultInput = document.getElementById("result");
  
    let binaryOption = document.createElement("option");
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";
    let hexadecimalOption = document.createElement("option");
    hexadecimalOption.value = "hexadecimal";
    hexadecimalOption.textContent = "Hexadecimal";
    toSelect.appendChild(binaryOption);
    toSelect.appendChild(hexadecimalOption);
  
    convertButton.addEventListener("click", function () {
      let decimalNumber = parseInt(decimalInput.value);
      let toOption = toSelect.value;
  
      if (toOption === "binary") {
        let binaryNumber = decimalNumber.toString(2);
        resultInput.value = binaryNumber;
      } else if (toOption === "hexadecimal") {
        let hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
        resultInput.value = hexadecimalNumber;
      }
    });
  }
  