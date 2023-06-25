function processOddPositions(arr) {
    arr.reverse();
    let newArr = [];
    for(let i = 0;i < arr.length;i++){
        if(i % 2 == 0){
        newArr.push(arr[i]*2)
        }
    }
   return newArr.join(" ");
}
let result = processOddPositions([10, 15, 20, 25] );
console.log(result);
result = processOddPositions([3, 0, 10, 4, 7, 3]);
console.log(result);

