/// <reference types="cypress"/>

// Notes: before hook runs once before all tests in the block
//        after hook runss once after all tests in the block
//        beforeEach hook runs before each test in the block
//        afterEach hook runs after each test in the block


describe('Hooks', () => {


    before(() => {
        cy.log('runs once before all the tests in the block')
    })

    beforeEach(() => {
        cy.log('runs before each test in the block')
    })

    afterEach(() => {
        cy.log('runs after each test in the block')
    })

    after(() => {
        cy.log('runs once after all the tests in the block')
    })

    it('Example test1', function () {
        cy.log('Example Test1!')
    })


    it('Example test2', function () {
        cy.log('Example Test2!')
    })


})