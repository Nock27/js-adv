function delimiter(arrOfStrings,delimeter) {

    for(let i = 0;i < arrOfStrings.length - 1;i++){
        arrOfStrings[i] += delimeter;
    }
    console.log(arrOfStrings.join(""));
}
delimiter(['One',
'Two',
'Three',
'Four',
'Five'],
'-');
delimiter(['How about no?',
'I',
'will',
'not',
'do',
'it!'],
'_'
);
