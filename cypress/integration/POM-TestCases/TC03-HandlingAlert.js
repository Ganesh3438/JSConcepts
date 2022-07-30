/// <reference types = "cypress"/>

describe('Handling Alert', ()=>{

it('By default cypress is responsible to handle JS Alert', ()=>{

    cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
      // click on submit button to produce the alert pop up
      cy.get('input[type="submit"]').click();

})

})