import 'cypress-file-upload'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password)=>{

    cy.get('#loginFrm_loginname').type(username)
    cy.get('#loginFrm_password').type(password)
    cy.get('button[title="Login"]').click()

})

Cypress.Commands.add('elementIsVisbleOrNotUsingXpathLoactor', (locator)=>{
    // cy.xpath(locator).should('be.visible');
    cy.xpath(locator);
    
})

Cypress.Commands.add('switchToWindow', (locator, attributeHrefOrSrc)=>{
     cy.get(locator).then(function(l){

      const txt = l.prop(attributeHrefOrSrc);
      cy.log(txt)

      cy.visit(txt);
})
})


// Cypress.Commands.add("parseXlsx", (InputFile)=>{
//     return cy.task('parseXlsx', {filePath: inputFile})
// });