/// <reference types="cypress"/>

let rowsLength;

describe('Data Driven', () => {

    // before(() =>{
    //     cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1"}).then((rows)=>{
    //         rowsLength = rows.length;
    //         cy.log('The length is:'+rowsLength)
    //         cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
    //     })
    // })

    it('API', () => {


        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.log('The length is:' + rowsLength)

            //  cy.task('parseXlsx', {file: 'cypress/fixtures/excelData.xlsx'}).then((newData) =>{
            //     cy.writeFile("cypress/fixtures/xlsxData.json", { newData })
            //  })

            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
        })


        cy.fixture('xlsxData').then((data) => {

            cy.log("Fixture Data:" + JSON.stringify(data))

            // console.log("Fixture Data:"+ JSON.stringify(data))
            for (let i = 0; i < rowsLength; i++) {

                cy.log(data.rows[i].method)
                cy.log(data.rows[i].url)
                cy.log("Testing purpose:" + data.rows[i].body)
                // cy.log('The body of the response:'+ JSON.stringify(data.rows[i].body))

                // let bodyResponse = JSON.stringify(data.rows[i].body)

                // const obj = JSON.parse('data.rows[i].body')
                // let testdata = '{"username" : "admin","password" : "password123"}';
                const obj = JSON.parse(JSON.stringify("'" + data.rows[i].body + "'"));
                cy.log("The object is:" + obj)
                console.log('Data From fixture file:' + obj)
                // console.log('Data From fixture file:'+ data.rows[i].body)
                // console.log('Converting into string'+ bodyResponse)

                cy.request({
                    method: data.rows[i].method,
                    url: data.rows[i].url,
                    headers: {
                        accept: "application/json",
                        // contentType: "application/json"
                        // ContentType: "application/javascript; harset=utf-8"


                    },

                    body:
                        //obj
                        data.rows[i].body
                    // {
                    //     "username" : "admin",
                    //     "password" : "password123"
                    // }








                }).then(response => {
                    let body = JSON.stringify(response.body)
                    cy.log(body)


                    cy.log('The response status code is:' + response.status)
                })


//             cy.request(data.rows[i].method, data.rows[i].url, data.rows[i].body).then(
//   (response) => {
//     // response.body is automatically serialized into JSON
//     // expect(response.body).to.have.property('name', 'Jane') // true
//             cy.log(JSON.stringify(response.body))
//     cy.log('The response status code is:' + response.status)
//   }
// )

            }
        })
    })

})