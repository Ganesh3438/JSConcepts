/// <reference types="cypress"/>

describe('Handling multiple window', function () {

    it('Switch to window', function () {

        const locator = '//h1[text()="CONTACT US"]';
        const css_locator_conatct_us = '#contact-us';
        const value = 'href';

    cy.visit('https://webdriveruniversity.com/');

    // cy.xpath(locator).should('be.visible');
    cy.elementIsVisbleOrNotUsingXpathLoactor(locator);

    // cy.get('#contact-us').then(function(l){

    //   const txt = l.prop('href');
    //   cy.log(txt)

    //   cy.visit(txt);
    //   cy.go('back')

   cy.switchToWindow(css_locator_conatct_us, value)



    })

    })

// })