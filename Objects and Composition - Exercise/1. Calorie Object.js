function calorieNote(arrOfStrings) {
    let book = {};
    for(let i = 0;i < arrOfStrings.length;i++){
       if(i % 2 == 0){
        book[arrOfStrings[i]] = Number(arrOfStrings[i + 1]);
       }
    }
    console.log(book);
}
calorieNote(['Yoghurt', '48', 'Rise', '138',
'Apple', '52'] );
calorieNote(['Potato', '93', 'Skyr', '63',
'Cucumber', '18', 'Milk', '42']
);
