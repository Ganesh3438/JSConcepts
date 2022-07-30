/// <reference types="cypress" />

describe("Get Request", () => {

    // it('Test', function () {
    //     cy.intercept("GET", "https://gorest.co.in/public-api/users").as("data")
    //     cy.wait("@data").should(({ request, response }) => {
    //         cy.log("Response:" + JSON.stringify(response))
    //     })
    // })

    it('API Response', function () {

        cy.request({
            method: "GET",
            url: "https://flask-rest-api-demo.herokuapp.com/product/motorbike",
            headers: {
                accept: "application/json"

            }
        }).then(response => {
            // let body = JSON.parse(JSON.stringify(response.body))
            // cy.log(body)
            cy.writeFile('cypress/fixtures/motorbike.json', response.body)
        })



    })

    it('Second API Response', function () {

        cy.request({
            method: "GET",
            url: "https://flask-rest-api-demo.herokuapp.com/product/motorbike",
            headers: {
                accept: "application/json"

            }
        }).then(response => {
            // let body = JSON.parse(JSON.stringify(response.body))
            // cy.log(body)
            cy.writeFile('cypress/fixtures/motorbike1.json', response.body)

            console.log(response)

            cy.log('The status of the API is:'+ response.status)

            expect(response.body.product[0].id).equal(3)
        })



    })

    it('Reading API and validating', () => {

        cy.readFile('cypress/fixtures/motorbike.json')
            .then(data2 => cy.readFile('cypress/fixtures/motorbike1.json').should('deep.equal', data2))


    })


    // it('Reading API response and validating the data', () => {


        
    // //     var comparejson = cy.readFile('cypress/fixtures/motorbike1.json')
    // //     cy
    // //         .readFile('cypress/fixtures/motorbike.json')
    // //         .then(json => cy.readFile(comparejson).should('deep.equal', json))

    

    // })


})