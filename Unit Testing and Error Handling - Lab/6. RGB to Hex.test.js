const rgbToHexColor = require('./6. RGB to Hex');
const expect = require('chai').expect;
describe('Sum of arr', () => {
    it('Should return undefined if the numbers are beyong 256', () => {
        let actualSum = rgbToHexColor(265,12,4);
        let expectedSum = undefined;
        expect(actualSum).to.equal(expectedSum)
    })
    it('Should take only three arguments,if not return undefined', () => {
        let actualSum = rgbToHexColor(2,5);
        let expectedSum = undefined ;
        expect(actualSum).to.equal(expectedSum)
    })
    it('Should return the number value in string', () => {
        let actualSum = rgbToHexColor(255,16,20);
        let expectedSum = '#FF1014';
        expect(actualSum).to.equal(expectedSum)
        
    })
    it('Should return undefined if i insert strings', () => {
        let actualSum = rgbToHexColor('asd','dsf','sad');
        let expectedSum = undefined;
        expect(actualSum).to.equal(expectedSum)
        
    })
    });