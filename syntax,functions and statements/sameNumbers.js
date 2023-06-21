function sameNums(num) {
    number = num.toString();
    let sum = 0;
    let state = true;
   
    for(let i = 0;i < number.length;i++){
        if(number[0] != number[i]){
            state = false;
        }
        sum += Number(number[i]);
    }
    
    console.log(state);
    console.log(sum);
}
sameNums(2222222);
sameNums(1234);
