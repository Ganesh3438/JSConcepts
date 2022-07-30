/// <reference types = "cypress"/>

describe('Login', function () {

    it('Navigate', function () {

        cy.visit('https://app.hubspot.com/login');

        cy.get('#username').type('Ganesh');
        cy.get('#password').type('Selenium')
        cy.get('#loginBtn').click();

    })

})