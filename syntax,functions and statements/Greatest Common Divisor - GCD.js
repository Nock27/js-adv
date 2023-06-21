function divisor(num1,num2) {
    let greatestDivisor;
    let tempResult;
    let firstNum = num1;
    let secondNum = num2;
    while (tempResult != 0) {
        if(firstNum % secondNum == 0){
            greatestDivisor = secondNum;
            break;
        }
        tempResult = firstNum % secondNum
        firstNum = secondNum;
        secondNum = tempResult;
        greatestDivisor = secondNum;
    }
    console.log(greatestDivisor);
}
divisor(15, 5);
divisor(2154, 458 );
