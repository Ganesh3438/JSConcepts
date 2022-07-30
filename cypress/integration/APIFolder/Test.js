/// <reference types="cypress"/>


describe('API', () => {

    it('Test', () => {
        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?id=7",
            headers: {

                accept: "application/json",

            }

        }).then((response) => {

            expect(response.status).to.eql(200)

            cy.log(JSON.stringify(response.body))

        })






    })

})
