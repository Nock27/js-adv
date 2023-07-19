const expect  = require('chai').expect;//use it more!!
const solve = require('./01. Sub Sum');

describe('Sub-sum Calculator', () => {
    it('Should calculate sub-sum when end index is larger than length', () =>
    {
        //Arrange
        let expectedSum =150;
        let numbers = [10,20,30,40,50,60];
        let startIndex = 3;
        let endIndex = 300;
    
        //Act
        let actualSum = solve(numbers,startIndex,endIndex);
        
        //expect
        expect(actualSum).to.equal(expectedSum)
    });
    it('Should calculate sub-sum when startIndex is lower than 0', () => {
         //Arrange
         let expectedSum = 60;
         let numbers = [10,20,30,40,50,60];
         let startIndex = -100;
         let endIndex = 2;
     
         //Act
         let actualSum = solve(numbers,startIndex,endIndex);
         
         //expect
        //  expect.equal(actualSum,expectedSum);
        expect(actualSum).to.equal(expectedSum)
    })
    it('Should return Nan when non array is provided for first arugument', () => {
        expect(solve(10,0,1)).to.be.NaN;
        expect(solve(10,0,1)).to.be.NaN;
        expect(solve(true,0,1)).to.be.NaN;
        expect(solve({},0,1)).to.be.NaN;
        expect(solve('10',0,1)).to.be.NaN;
        expect(solve(null,0,1)).to.be.NaN;
        expect(solve(undefined,0,1)).to.be.NaN;
       
       
       
        // expect.equal(Number.isNaN(solve(10,0,1)),true)
        // expect.(solve(10,0,1).to.be.NaN);
        // expect.(solve(true,0,1).to.be.NaN);
        // expect.(solve({},0,1).to.be.NaN);
        // expect.(solve('10',0,1).to.be.NaN);
        // expect.(solve(null,0,1).to.be.NaN);
     
       // expect.(solve(undefined,0,1).to.be.NaN);
    

   })
})

