function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let firstNumber = Number(num1.value);
    let secondNumber = Number(num2.value);
    let sum = firstNumber + secondNumber;
    resultElement = document.getElementById('sum')
    resultElement.value = sum;
}
