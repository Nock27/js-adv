function sortingNumbers(arrOfNums) {
  let resultArr = [];
  arrOfNums.sort((a,b) => a-b);
  while(arrOfNums.length != 0){
    resultArr.push(arrOfNums.shift());
    resultArr.push(arrOfNums.pop());
  }
  return resultArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

