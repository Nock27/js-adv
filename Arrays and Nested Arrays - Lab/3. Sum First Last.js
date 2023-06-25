function sumFirstAndLast(arr) {
    let firstNumber = Number(arr.shift());
    let secondNumber = Number(arr.pop());
    let sum = firstNumber + secondNumber;
    return sum;
}
let result = sumFirstAndLast(['20', '30', '40']);
console.log(result);
result = sumFirstAndLast(['5', '10'] );
console.log(result);




