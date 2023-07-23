const isOddOrEven = require('./02. Even Or Odd')
const assert = require('chai').assert;
describe('Cheking function named isOddOrEven',() => {
    //For Invalid input
    it('Should return undefined if we put number as input',() => {
        let expectedResult = undefined;
        let actualResult = isOddOrEven(12);
        assert.equal(actualResult,expectedResult);
    })
    it('Should return undefined if we put array as input',() => {
        let expectedResult = undefined;
        let actualResult = isOddOrEven([]);
        assert.equal(actualResult,expectedResult);
    })
    it('Should return undefined if we put object as input',() => {
        let expectedResult = undefined;
        let actualResult = isOddOrEven({});
        assert.equal(actualResult,expectedResult);
    })
    //For valid input
    it('Should return odd when we put odd string',() => {
        let expectedResult = "odd";
        let actualResult = isOddOrEven('gfdaf');
        assert.equal(actualResult,expectedResult);
    })
    it('Should return even if when we put even string',() => {
        let expectedResult = "even";
        let actualResult = isOddOrEven('dfsd');
        assert.equal(actualResult,expectedResult);
    })
})
