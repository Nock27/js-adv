function sort(arrOfNums,orderType) {
    if(orderType === 'asc'){
        arrOfNums.sort((a,b) => a - b);
    }else if(orderType === 'desc'){
        arrOfNums.sort((a,b) => b - a)
    }
    return arrOfNums;
}
console.log(sort([14, 7, 17, 6, 8], 'asc' ));
console.log(sort([14, 7, 17, 6, 8], 'desc'));
