/// <reference types="cypress" />

describe('Testing', function() {

   

    it('Test', function(){

        cy.visit('https://automationteststore.com/')

        // const productName = cy.get('.fixed_wrapper').find('.prdocutname').eq(0);

        // productName.click()


        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).as('product');

        cy.get('@product').click()

    })

})