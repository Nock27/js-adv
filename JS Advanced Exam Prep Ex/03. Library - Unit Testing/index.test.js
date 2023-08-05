let library = require('./library');
const {assert,expect} = require('chai');
describe('Library tests', () => {
    
    describe('calcPriceOfBook tests', () => {
        it('Invalid input - name of the book',() => {
            expect(() => library.calcPriceOfBook(1,1).to.throw('Invalid input'))
        });
        it('Invalid input - year',() => {
            expect(() => library.calcPriceOfBook('1','1').to.throw('Invalid input'))
        });
        it('Valid date below 1980',() => {
           expect(library.calcPriceOfBook('Harry Poter',1943)).to.equal(`Price of Harry Poter is 10.00`);
        });
        it('Valid date - 1980',() => {
            expect(library.calcPriceOfBook('Harry Poter',1980)).to.equal(`Price of Harry Poter is 10.00`);
         });
         it('Valid date higher  than 1980',() => {
            expect(library.calcPriceOfBook('Harry Poter',1990)).to.equal(`Price of Harry Poter is 20.00`);
         });
    })
    describe('findBook tests', () => {
        it('Invalid input - empty arrray',() => {
            expect(() => library.findBook([],'Harry Poter')).to.throw(`No books currently available`);
         });
         it('shoudl return the desired book',() => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],"Troy")).to.equal(`We found the book you want.`);
         });
         it('shoudl not return the desired book',() => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"],'Harry Poter')).to.equal(`The book you are looking for is not here!`);
         });
    })
    describe('arrangeTheBooks tests', () => {
        it('Invalid input - deciamal num',() => {
            expect(() => library.arrangeTheBooks(2.12)).to.throw(`Invalid input`);
         });
         it('Invalid input - string',() => {
            expect(() => library.arrangeTheBooks('dfg')).to.throw(`Invalid input`);
         });
         it('Invalid input - negative num',() => {
            expect(() => library.arrangeTheBooks(-100)).to.throw(`Invalid input`);
         });
         it('shoudl return positive return - below than available space',() => {
            expect(library.arrangeTheBooks(39)).to.equal(`Great job, the books are arranged.`);
         });
         it('shoudl return positive return - equal to available space',() => {
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`);
         });
         it('shoudl return negative return - higher than available space',() => {
            expect(library.arrangeTheBooks(45)).to.equal(`Insufficient space, more shelves need to be purchased.`);
         });
    })
    
})