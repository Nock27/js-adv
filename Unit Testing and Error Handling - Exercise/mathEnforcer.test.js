const mathEnforcer = require('./04. Math Enforcer');
const assert = require('chai').assert;

describe('Testing the functionality of mathEnforcer', () => {
    describe('add5 function',() =>{
        //Invalid input
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.addFive('23'),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.addFive([]),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.addFive({}),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.addFive(null),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.addFive(undefined),undefined);
        })
        //Valid Input
        it('Should return number += 5 if the parameter is number', () => {
            assert.equal(mathEnforcer.addFive(5),10);
        })
        it('Should return number += 5 if the parameter is negative number', () => {
            assert.equal(mathEnforcer.addFive(-5),0);
        })
        it('Should return number += 5.5 if the parameter is decimal number', () => {
            assert.equal(mathEnforcer.addFive(5.5),10.5);
        })
    })
    describe('subtractTen function',() =>{
        //Invalid input
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.subtractTen('23'),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.subtractTen([]),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.subtractTen({}),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.subtractTen(null),undefined);
        })
        it('Should return undefined if the parameter is NOT a number', () => {
            assert.equal(mathEnforcer.subtractTen(undefined),undefined);
        })
        //Valid input
        //Valid Input
        it('Should return number -= 10 if the parameter is number', () => {
            assert.equal(mathEnforcer.subtractTen(20),10);
        })
        it('Should return number -= 10 if the parameter is negative number', () => {
            assert.equal(mathEnforcer.subtractTen(-10),-20);
        })
        it('Should return number -= 10 if the parameter is decimal number', () => {
            assert.equal(mathEnforcer.subtractTen(20.5),10.5);
        })
    })
    describe('sum function',() =>{
        it('Should return undefined if any of the 2 parameters is NOT a number', () => {
        assert.equal(mathEnforcer.sum('23',23),undefined);
    })
    it('Should return undefined if any of the 2 parameters is NOT a number', () => {
        assert.equal(mathEnforcer.sum(23,'23'),undefined);
    })
    it('Should return undefined if any of the 2 parameters is NOT a number', () => {
        assert.equal(mathEnforcer.sum('23','23'),undefined);
    })
    //Valid input
    it('Should return the sum of the 2 parameters if both are numbers', () => {
        assert.equal(mathEnforcer.sum(5,6),11);
    })
    it('Should return the sum of the 2 parameters if both are negative numbers', () => {
        assert.equal(mathEnforcer.sum(-5,-6),-11);
    })
    it('Should return the sum of the 2 parameters if both are decimal numbers', () => {
        assert.equal(mathEnforcer.sum(5.5,6.5),12);
    })
    })
})

    


