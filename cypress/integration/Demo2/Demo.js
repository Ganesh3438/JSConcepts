/// <reference types="Cypress"/>

const { eq } = require("cypress/types/lodash");

describe('Navigating to ecommer', function(){


it('Test', function(){

// cy.visit('http://automationpractice.com/index.php?id_product=1&controller=product');
// // cy.visit('http://automationpractice.com/');

// // cy.get('.product-container').find('a').eq(0).click()

// cy.xpath('(//div[@class= "product-image-container"]//a)[1]').click()

// // cy.wait(2000)

// cy.xpath('//span[text()="Add to cart"]').click()
// cy.xpath('//span[text()="$16.51"]').should('have.text', '$16.51')


cy.visit('http://makeseleniumeasy.com/api-testing/');

cy.xpath('//a').each(($el)=>{

$el.click();

})

})


})