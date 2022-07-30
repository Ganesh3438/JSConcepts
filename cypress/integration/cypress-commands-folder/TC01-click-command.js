/// <reference types = "Cypress"/>

describe('Click command', ()=>{

it('Handling click command', ()=>{

cy.visit('https://automationteststore.com/index.php?rt=account/login');

cy.xpath('//button[@title="Continue"]').click()

})


})