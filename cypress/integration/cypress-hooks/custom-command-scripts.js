/// <reference types="cypress"/>

// Notes: before hook runs once before all tests in the block
//        after hook runss once after all tests in the block
//        beforeEach hook runs before each test in the block
//        afterEach hook runs after each test in the block


describe('Hooks', () => {


    before(() => {
       cy.fixture('example.json').then((data)=>{
        // this.data= data;
        globalThis.data = data;
       })
    })


    it('Example test1', function () {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.login(data.username, data.password);
    })


    


})