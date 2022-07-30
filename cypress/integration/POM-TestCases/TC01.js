import HomePage_PO from "../../support/pageObjects/WebDriverUniversity/HomePage_PO";

/// <reference types="cypress"/>

describe('Test', () => {
    const homePage_po = new HomePage_PO;;

    before(function () {
        cy.fixture('example.json').then(function (data) {
            // this.data = data;
            globalThis.data = data;

        })
    })

    beforeEach(function () {

        homePage_po.visitHomePage();

    })


    // it('Test1', () => {
    //     homePage_po.elementVisibleMethod()
    // })

    // it('Test1', () => {
    //     homePage_po.switchToWindow()
    // })

    it('Filling form', ()=>{
        homePage_po.switchToWindow()
        cy.wait(2000)
        homePage_po.fillingContactForm(data.firstName, data.lastName, data.email, data.comments )
    })






})
