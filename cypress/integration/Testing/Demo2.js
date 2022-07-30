/// <reference types="cypress" />

describe("Get Request", () => {

    // it('Test', function () {
    //     cy.intercept("GET", "https://gorest.co.in/public-api/users").as("data")
    //     cy.wait("@data").should(({ request, response }) => {
    //         cy.log("Response:" + JSON.stringify(response))
    //     })
    // })
    var data1;
    var data;
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
            // cy.log()
            // cy.writeFile('cypress/fixtures/motorbike3.json', response.body)

            data = JSON.stringify(response.body);

            cy.log("The response of first API:"+ data)

            
        })



    })

    it('Second API Response', function () {

        cy.request({
            method: "GET",
            url: "http://ergast.com/api/f1/2017/circuits.json",
            headers: {
                accept: "application/json"

            }
        }).then(response => {
            // let body = JSON.parse(JSON.stringify(response.body))
            // cy.log(body)

         
             data1 = JSON.stringify(response.body);

            cy.log(data1)
            // cy.writeFile('cypress/fixtures/motorbike4.json', response.body)
        })



    })

    it('Reading API and validating', () => {

        // cy.readFile('cypress/fixtures/motorbike.json')
        //     .then(data2 => cy.readFile('cypress/fixtures/motorbike1.json').should('deep.equal', data2))

        // if(data == data1){
        //     cy.log('Data is as expected')
        // }else{
        //     cy.log('Data is not matching')
        // }

        expect(data).to.equal(data1) // true


    })


    // it('Reading API response and validating', () => {


        
    //     var comparejson = cy.readFile('cypress/fixtures/motorbike1.json')
    //     cy
    //         .readFile('cypress/fixtures/motorbike.json')
    //         .then(json => cy.readFile(comparejson).should('deep.equal', json))
    // })


})