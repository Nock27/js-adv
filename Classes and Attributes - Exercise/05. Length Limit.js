class Stringer{
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(Length){
        this.innerLength += Length;
    }
    decrease(Length){
        this.innerLength -= Length;
        this.innerLength = Math.max(0,this.innerLength);
    }
    toString(){
        if(this.innerString.length > this.innerLength){
            if(this.innerLength === 0){
                return '...';
            }else if(this.innerString.length > this.innerLength){
                return this.innerString.substring(0,this.innerLength) + '...';
            }else{
                return this.innerString;
            }
        }
        return this.innerString;
        
}
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test