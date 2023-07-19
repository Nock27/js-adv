const sum = require('./4-sumOfNumbers');
const expect = require('chai').expect;
describe('Sum of numbers', () => {
it('Should return the sum of numbers in the array', () => {
    let numbers = [1,2,3,4,5];
    let actualSum = sum(numbers);
    let expectedSum = 15
    expect(actualSum).to.equal(expectedSum)
})
it('Should return the sum with negative number in the array', () => {
    let numbers = [1,2,3,4,-5];
    let actualSum = sum(numbers);
    let expectedSum = 5;
    expect(actualSum).to.equal(expectedSum)
})
it('Should return 0 only when the only nums are 0', () => {
    let numbers = [0,0,0,0,0];
    let actualSum = sum(numbers);
    let expectedSum = 0;
    expect(actualSum).to.equal(expectedSum)
})
});