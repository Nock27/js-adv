const isSymmetric = require('./5. Check for Symmetry');
const expect = require('chai').expect;
describe('Sum of arr', () => {
it('Should return true if the input is symetric', () => {
    let arr = [1,2,1];
    let actualSum = isSymmetric(arr);
    let expectedSum = true
    expect(actualSum).to.equal(expectedSum)
})
it('Should return the sum with negative number in the array', () => {
    let arr = 12;
    let actualSum = isSymmetric(arr);
    let expectedSum = false;
    expect(actualSum).to.equal(expectedSum)
})
it('Should return false if the input is arr', () => {
    let arr = [1,5,3,4];
    let actualSum = isSymmetric(arr);
    let expectedSum = false;
    expect(actualSum).to.equal(expectedSum)
    
})
it('Should return false if i insert strings', () => {
    let arr = ['la','so','si'];
    let actualSum = isSymmetric(arr);
    let expectedSum = false;
    expect(actualSum).to.equal(expectedSum)
    
})
it('Should return false if the input is obj', () => {
    let arr = null;
    let actualSum = isSymmetric(arr);
    let expectedSum = false;
    expect(actualSum).to.equal(expectedSum)
    
})
});