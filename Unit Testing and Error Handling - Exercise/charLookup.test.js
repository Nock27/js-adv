const lookupChar = require('./03. Char Lookup');
const assert = require('chai').assert;
describe('Testing functionality of char lookup function',() => {
   
   //For invalid input
    it('Should return undefined if the first parameter is not a string or second parameter is not a number',() => {
        assert.equal(lookupChar(23, 2),undefined);
        assert.equal(lookupChar('dsafasdg', '2'),undefined);
        assert.equal(lookupChar([], {}),undefined);
        assert.equal(lookupChar('dsafasdg', 2.5),undefined);


    })
    it('Should return Incorrect index if both parameters are of the correct type but the value of the index is incorrect',() => {
        assert.equal(lookupChar('dsafasdg', 8),'Incorrect index');
        assert.equal(lookupChar('dsafasdg', 12),'Incorrect index');
        assert.equal(lookupChar('dsafasdg', -12),'Incorrect index');

    })
    //For Valid input
    it('Should return the char at the specified index',() => {
        assert.equal(lookupChar('dsafasdg', 7),'g')
        
    })
})