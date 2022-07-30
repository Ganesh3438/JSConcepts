/// <reference types = "cypress"/>

describe('Total', () => {

    it("Testing", () => {

        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('price');

        var itemTotal = 0;

        cy.get('@price').then(($el) => {
            var itemPriceTotal = 0;

            var total = $el.split('$');
            // cy.log(total)

            for (var i = 0; i < total.length; i++) {
                cy.log(total[i])
                itemPriceTotal += Number(total[i])

            }
         itemTotal = itemPriceTotal;
         cy.log('Ttal price is:'+ itemTotal)
        })

    })

})