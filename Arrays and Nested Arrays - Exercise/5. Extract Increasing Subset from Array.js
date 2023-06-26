function filter(arrOfNums) {
    let arr = [arrOfNums[0]];
    let maxElement = arr[0];
    for(let i = 1;i < arrOfNums.length;i++){
        if(arrOfNums[i] >= maxElement){
            arr.push(arrOfNums[i]);
            maxElement = arrOfNums[i]
        }
    }
    return arr;
}
filter([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24] );
filter([1,
    2,
    3,
    4]);
filter([20,
    3,
    2,
    15,6,
    1]);
