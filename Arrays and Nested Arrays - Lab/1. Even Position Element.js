function evenPosition(arrOfStrings) {
    let result = [];
    for(let i = 0;i < arrOfStrings.length; i++){
        if(i % 2 == 0){
            result.push(arrOfStrings[i])
        }
    }
    console.log(result.join(' '));
}
evenPosition(['20', '30', '40','50', '60']);
evenPosition(['5', '10']);
