function filter(arrOfNums,step) {
    let resultArr = [];
    for(let i = 0;i < arrOfNums.length;i+=step){
        resultArr.push(arrOfNums[i]);
    }
    return resultArr;
}
filter(['5',
'20',
'31',
'4',
'20'],
2);
filter(['dsa',
'asd',
'test',
'tset'],
2
);
filter(['1',
'2',
'3',
'4',
'5'],
6
);

