
/// <reference types="cypress" />

describe('API Testing', () => {

    it('API Calls', () => {

        //     cy.request({
        //         method: "GET",
        //         url: "http://ergast.com/api/f1/2017/circuits.json",
        //         headers: {

        //             accept: "application/json"
        //         }

        //     }).then(response =>{
        //         let body = JSON.parse(JSON.stringify(response.body))
        //         cy.log(body)

        //         console.log(body)

        //         expect(body[0]).has.property("MRData.CircuitTable.Circuits[0].circuitId", "albert_park")
        //     })

        cy.request('http://ergast.com/api/f1/2017/circuits.json').then((response) => {
            
        console.log(response.body)

        //   expect(response.body.MRData.CircuitTable.Circuits[0].circuitId).to.equal('albert_park')

            cy.writeFile('cypress/fixtures/users.json', response.body)
            //   cy.readFile('cypress/fixtures/users.json').then((user) => {
            //     expect(user[0].Circuits[0].circuitId).to.equal('albert_park') // true

            //   })
        })



    })


    it('Second API', () => {
        cy.request('http://ergast.com/api/f1/2017/circuits.json').then((response) => {
            console.log(response.body)
            cy.writeFile('cypress/fixtures/users1.json', response.body)
        })
    })

    it('Reading API and validating', () => {
        cy.readFile('cypress/fixtures/users.json')
            .then(data2 => cy.readFile('cypress/fixtures/users1.json').should('deep.equal', data2))
    })

})