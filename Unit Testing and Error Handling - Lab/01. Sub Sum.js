function sumSub(arrOfNums,start,end) {
    if(!Array.isArray(arrOfNums)){
        return NaN;
    }
    let startIndex = Math.max(start,0);
    let endIndex = Math.min(arrOfNums.length,end);
    let subArr = arrOfNums.slice(startIndex,endIndex + 1);
    let sum = subArr.reduce((a,x) => {
         return a + Number(x);
    },0)
    return sum;
}

console.log(sumSub([10, 20, 30, 40, 50, 60], 3, 300));
module.exports = sumSub;