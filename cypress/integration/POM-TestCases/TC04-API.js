/// <reference types="Cypress"/>

describe('', () => {

    it('API', () => {

        cy.request({

            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {

                contentType: "application/json",
                authorization: "Bearer 2efefbf1ef9a7c746e9b20acd1d362a222d51141028e8cb887b8c73a63c13407"
            },

            body: {

                "id": 2999,
                "name": "Siva",
                "email": "siva1199@gmail.com",
                "gender": "male",
                "status": "active"
            }


        }).then((response) => {

            
            cy.log(response.status); 

            cy.log(JSON.stringify(response.body))
            console.log(JSON.stringify(response.body))

            expect(response.status).to.eql(201)
            

            console.log(response.body)

            
            

        })

    })


})