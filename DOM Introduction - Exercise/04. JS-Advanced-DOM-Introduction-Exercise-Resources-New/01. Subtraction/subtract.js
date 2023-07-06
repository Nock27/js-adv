function subtract() {
   let firstNumberElement = document.getElementById('firstNumber');
   let secondNumberElement = document.getElementById('secondNumber');
   let firstNum = Number(firstNumberElement.value);
   let secondNum = Number(secondNumberElement.value);
   let sub = firstNum - secondNum;
   console.log(sub);
   let resultElement = document.getElementById('result');
   resultElement.textContent = sub;
}