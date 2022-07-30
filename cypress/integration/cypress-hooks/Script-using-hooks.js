/// <reference types="cypress"/>

// Notes: before hook runs once before all tests in the block
//        after hook runss once after all tests in the block
//        beforeEach hook runs before each test in the block
//        afterEach hook runs after each test in the block


describe('Hooks', () => {


    before(() => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

   
    it('Example test1', function () {
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    })


    it('Example test2', function () {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumkin']").should('be.checked');

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumkin']").should('not.be.checked');

        cy.get("[value='cabbage']").should('be.disabled')



    })


})