/// <reference types = "Cypress"/>

describe('Checkbox', ()=>{


    it("Checkbox", ()=>{

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    //    cy.get('#checkboxes > :nth-child(1) >input').check()

    cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"])

    


    })
 

})