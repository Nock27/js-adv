function cordinator(arr) {
    let newArr = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] >= 0){
            newArr.push(arr[i]);
        }
        else{
            newArr.unshift(arr[i]);
        }
    }
    console.log(newArr);
}
cordinator([7, -2, 8, 9] );
cordinator([3, -2, 0, -1]);
