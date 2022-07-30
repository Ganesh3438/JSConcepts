/// <reference types="cypress"/>

describe('Testing', function () {


    it('calling comamnds by find method', () => {

    cy.visit('https://automationteststore.com/');
    cy.get('#block_frame_featured_1769').find('.prdocutname').eq(0).click()

    cy.title().should('eq', 'Skinsheen Bronzer Stick')

    // const path = '/product&product_id=50';
    // cy.url().then(($url) => {
    //     if($url.includes(path)) {
    //         cy.log("Yes")
    //     } else  {
    //         cy.log("No")
    //       }
    // })

    cy.url().should('include', '/product&product_id=50')

    })

})