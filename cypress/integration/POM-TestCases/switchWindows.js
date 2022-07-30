/// <reference types="cypress" />

describe("Switching window using cypress", () => {


it('Handling multiple windows', function () {

        cy.visit("https://www.naukri.com/");
        // grab the href prop with prop() JQuery method
        cy.xpath("//a[@title='Naukri FastForward- Resume Services']").then(function (l) {
            const txt = l.prop('href');
            // get the url in logs
            cy.log(txt);
            // launch the url again
            cy.visit(txt);
            cy.go('back')
        })

})


})