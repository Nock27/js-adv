function rotation(arrOfNums,rotations) {
    for(let i = 0;i < rotations;i++){
        let temp = arrOfNums.pop();
        arrOfNums.unshift(temp);
    }
    console.log(arrOfNums.join(" "));
}
rotation(['1',
'2',
'3',
'4'],
2
);
rotation(['Banana',
'Orange',
'Coconut',
'Apple'],
15);

