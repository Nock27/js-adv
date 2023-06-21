function cooking(num,c1,c2,c3,c4,c5) {
    number = Number(num);
    let arrayOfCommands = [c1,c2,c3,c4,c5];
    for(let i = 0;i < arrayOfCommands.length; i++){
        let currComand = arrayOfCommands[i];
        if(currComand == 'chop'){
            number = number / 2;
        }if(currComand == 'dice'){
            number = Math.sqrt(number);
        }if(currComand == 'spice'){
            number += 1;
        }if(currComand == 'bake'){
            number = number * 3;
        }if(currComand == 'fillet'){
            number = number - (number/5);
        }
       console.log(number);
    }

}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(`------------------------`);
console.log(`------------------------`);
cooking('9', 'dice', 'spice', 'chop', 'bake','fillet');
