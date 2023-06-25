function biggestElementInMatrix(arrOfArrays) {
    let maxElement = 0;
    for(let i = 0;i < arrOfArrays.length;i++){
        for(let j = 0;j < arrOfArrays[i].length;j++){
            let currElement = arrOfArrays[i][j];
            if(currElement > maxElement){
                maxElement = currElement;
            }
        }
    }
    return maxElement;
}
biggestElementInMatrix([[20, 50, 10],
    [8, 33, 145]]
    );
biggestElementInMatrix([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
    );
