function smallestTwoNumbers(arr) {
    let result = [];
    let firstNumber = Math.min(...arr)
    let indexOfFirstNumber = arr.indexOf(firstNumber)
    arr.splice(indexOfFirstNumber,1)
    let secondNumber = Math.min(...arr)
    result.push(firstNumber)
    result.push(secondNumber)
    console.log(result.join(" "));

}
smallestTwoNumbers([30, 15, 50, 5] );
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
