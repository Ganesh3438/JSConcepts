/// <reference types= "cypress"/>


describe('Testing the app', function () {

    it('Checking the application', function () {

        cy.visit('https://qa.freelancecentral.com/fc/login');

        cy.wait(5000)

        cy.get('#email').type('fcemployertest@gmail.com')

        cy.get('#pwd').type('Welcome@123')

        cy.xpath('//button[@type="submit"]').click()

       cy.get('#verification-code').type('123456');

       cy.xpath('//span[text()="Validate OTP"]').click()

       cy.wait(6000);

       cy.xpath('(//div[@class= "align-self-center"])[1]').click()

       cy.xpath('//h3[text()="Multiple Contractors"]').click()

       cy.xpath('(//div[@class="align-self-center"])[1] ').click()

       cy.wait(2000)

       var email = 'ganesh@gmail1.com';

       cy.xpath('(//input[@id = "floatingInput"])[1]').type('Ganesh')
       cy.xpath('(//input[@id = "floatingInput"])[2]').type('Kumar')
       cy.xpath('(//input[@id = "floatingInput"])[3]').type('IT')
       cy.xpath('(//input[@id = "floatingInput"])[4]').type('QA')
       cy.xpath('(//input[@id = "floatingInput"])[5]').type(email)
       cy.xpath('(//input[@id = "floatingInput"])[6]').type('7013807271')
       cy.xpath('(//input[@id = "floatingInput"])[7]').type('HYD')
       cy.xpath('(//input[@id = "floatingInput"])[8]').type('HYD')
       cy.xpath('(//input[@id = "floatingInput"])[9]').type('53001')
    //    cy.xpath('(//input[@id = "floatingInput"])[10]').type('HYd')
    //    cy.xpath('(//input[@id = "floatingInput"])[11]').type('Telagana')
    //    cy.xpath('(//input[@id = "floatingInput"])[12]').type('India')
       cy.xpath('(//input[@id = "floatingInput"])[13]').type('123456789')

       cy.xpath('//span[text()="Add Contractor"]').click()

       cy.wait(2000);

       cy.xpath('//td[text()="Ganesh Kumar"]').should('have.text', 'Ganesh Kumar')



    })



})