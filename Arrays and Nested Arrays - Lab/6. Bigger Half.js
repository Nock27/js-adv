function biggerHalf(arr) {
    newArr = [];
    arr.sort((a,b) => a - b);
    newArr = arr.slice(arr.length/2)
    console.log( newArr);
}
biggerHalf([4, 7, 2, 5] );
biggerHalf([3, 19, 14, 7, 2, 19, 6] );
