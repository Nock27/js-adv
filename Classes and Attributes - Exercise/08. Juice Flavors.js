function juices(arrOfStrings) {
    let obj = {};
    arrOfStrings.map((element) => {
        let [fruit,quantity] = element.split(" => ")
        if(!obj.hasOwnProperty(fruit)){
            obj[fruit] = Number(quantity);
        }else{
            obj[fruit] += Number(quantity);
        }
        
    })
    console.log(obj);
}
//..........
juices(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
