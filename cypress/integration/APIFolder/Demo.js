/// <reference types="cypress"/>
let vgridData = [];
let gcpDataArray = [];
var firstSheetData = {};
let secondSheetData = {};


describe('Testing', () => {

    it('Fetching fixture', () => {

        // cy.readFile('cypress/fixtures/example.json').then((data)=>{
        // //    var count =  data.length;
        //    cy.log(Object.keys(data).length)


        cy.fixture('example').then((data) => {

            var count = Object.keys(data).length;

            cy.log("The length of the array is:" + count)

            for (let i = 0; i < count; i++) {

                var methodType = data[i].method;
                var methodURL = data[i].url;
                var methodBODY = data[i].body;

                // cy.log(methodType)
                // cy.log(methodURL)
                cy.log(methodBODY)


                firstSheetData = { "methodType": data[i].method, "url": data[i].url, "body": data[i].body };


                gcpDataArray.push(JSON.parse(JSON.stringify(firstSheetData)));

            }
        })


        cy.fixture('demo').then((data1) => {

            var count = Object.keys(data1).length;

            cy.log("The length of the array is:" + count)

            for (let j = 0; j < count; j++) {

                var methodType = data1[j].method;
                var methodURL = data1[j].url;
                var methodBODY = data1[j].body;

                // cy.log(methodType)
                // cy.log(methodURL)
                // cy.log(methodBODY)


                secondSheetData = { "methodType": data1[j].method, "url": data1[j].url, "body": data1[j].body };


                vgridData.push(JSON.parse(JSON.stringify(secondSheetData)));

            }

            for (let k = 0; k <= gcpDataArray.length - 1; k++) {


                let secondsheetResponse;
                let firstsheetResponse;

                let getcallfirstsheetResponse;
                let getcallsecondsheetResponse;



                var sheetOneRecord = gcpDataArray[k];
                var sheetTworecord = vgridData[k];



                // if (sheetOneRecord.methodType != null && sheetOneRecord.methodType == sheetTworecord.methodType) {
                    if (sheetOneRecord.methodType != null) {

                       

                        switch (sheetOneRecord.methodType) {
                            case "POST":

                                cy.log('The URL which is executing POST CALL from Sheet1')
                                cy.request({
                                    method: sheetOneRecord.methodType,
                                    url: sheetOneRecord.url,
                                    headers: {
                                        accept: "application/json",
                                        // contentType: "application/json"
                                    },

                                    body: sheetOneRecord.body,

                                    failOnStatusCode: false





                                }).then(response => {


                                    firstsheetResponse = response.status

                                    cy.log('The response status code from first sheet is:' + firstsheetResponse)
                                })
                               

                                cy.log('The URL which is executing POST CALL from Sheet2')
                                cy.log('========================'+sheetTworecord.methodType)
                                // if(sheetTworecord.methodType == "POST"){


                                    cy.request({
                                        method: sheetTworecord.methodType,
                                        url: sheetTworecord.url,
                                        headers: {
                                            accept: "application/json",
                                            // contentType: "application/json"
                                        },

                                        body: sheetTworecord.body,

                                        failOnStatusCode: false





                                    }).then(response1 => {


                                        secondsheetResponse = response1.status;
                                        

                                        // expect(secondsheetResponse).to.eq(200)

                                        cy.log('The response status code from second sheet is:' + secondsheetResponse)
                                        try
                                            {
                                                expect(firstsheetResponse).to.equal(200)
                                            }catch (e)

                                            {
                                           cy.log('================Response code is not matching as expected... Please do check============')
                                            }
                                        expect(firstsheetResponse).to.equal(secondsheetResponse)
                                        
                                    })





                                // }

// =====================================================================================================
                                // cy.request({
                                //     method: sheetTworecord.methodType,
                                //     url: sheetTworecord.url,
                                //     headers: {
                                //         accept: "application/json",
                                //         // contentType: "application/json"
                                //     },

                                //     body: sheetTworecord.body,

                                //     failOnStatusCode: false





                                // }).then(response1 => {


                                //     secondsheetResponse = response1.status;
                                    

                                //     // expect(secondsheetResponse).to.eq(200)

                                //     cy.log('The response status code from second sheet is:' + secondsheetResponse)
                                //     try
                                //         {
                                //             expect(firstsheetResponse).to.equal(secondsheetResponse)
                                //         }catch (e)

                                //         {
                                //        cy.log('================Response code is not matching as expected... Please do check============')
                                //         }
                                //     // expect(firstsheetResponse).to.equal(secondsheetResponse)
                                    
                                // })


                                // expect(vgridAPIData).to.equal(gcpAPIData)

                                // expect(firstsheetResponse).to.equal(secondsheetResponse)

// ======================================================================================================================

                                break;


                            case "GET":
                                cy.log('The URL which is executing GET CALL from Sheet1')
                                cy.request({
                                    method: sheetOneRecord.methodType,
                                    url: sheetOneRecord.url,
                                    headers: {
                                        accept: "application/json",
                                        // contentType: "application/json"
                                    },


                                    failOnStatusCode: false





                                }).then(response => {
                                    // vgridBody = JSON.stringify(response.body)
                                    // cy.log("The body response from VGRID is:" + vgridBody)


                                    // let getcallfirstsheetResponse;
                                    // let getcallsecondsheetResponse;

                                    getcallfirstsheetResponse = response.status

                                    cy.log('The response status code from sheet1 is:' + getcallfirstsheetResponse)
                                })


                                cy.log('The URL which is executing GET CALL from Sheet2')

                                cy.request({
                                    method: sheetTworecord.methodType,
                                    url: sheetTworecord.url,
                                    headers: {
                                        accept: "application/json",
                                        // contentType: "application/json"
                                    },

                                    // body: data.rows[i].method,

                                    failOnStatusCode: false





                                }).then(response => {
                                    // vgridBody = JSON.stringify(response.body)
                                    // cy.log("The body response from VGRID is:" + vgridBody)

                                    getcallsecondsheetResponse = response.status;

                                    cy.log('The response status code from VGRID is:' + getcallsecondsheetResponse)
                                    expect(getcallfirstsheetResponse).to.equal(getcallsecondsheetResponse)
                                })


                                // expect(getcallfirstsheetResponse).to.equal(getcallsecondsheetResponse)



                                break;





                        }

                    }


                // }

            }




        })



    })

})


