
/// <reference types="cypress"/>

// const { first } = require("cypress/types/lodash");

let vgridrowsLength;
let gcprowsLength;

let vgridBody;
let vgridResponse;
let gcpBody;
let gcpResponse;



let vgridData = [];
let gcpDataArray = [];
let firstSheetData = {};
let secondSheetData = {};

// let secondsheetResponse = [];
// let firstsheetResponse = [];

// // let getcallfirstsheetResponse = [];
// // let getcallsecondsheetResponse = [];


describe('API testing', () => {

    it('API DEMO', () => {

        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {

            vgridrowsLength = rows.length;
            cy.log('First sheet Count' + vgridrowsLength)
            cy.writeFile("cypress/fixtures/xlsxData.json", { rows })



            cy.fixture('xlsxData').then((data) => {


                for (let i = 0; i < vgridrowsLength; i++) {

                    // To check whether the values are availiable or not
                    var methodData = data.rows[i].method
                    var urlData = data.rows[i].url
                    var bodyData = data.rows[i].body

                    cy.log('the sheet data for method is:' + methodData)

                    
                    firstSheetData = { "methodType": data.rows[i].method, "url": data.rows[i].url, "body": data.rows[i].body };

                    
                    gcpDataArray.push(JSON.parse(JSON.stringify(firstSheetData)));
                    


                }



            })



            cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet2" }).then((rows1) => {

                gcprowsLength = rows1.length;

                cy.log('The count for second sheet' + gcprowsLength)
                cy.writeFile("cypress/fixtures/xlsxData1.json", { rows1 })


                cy.fixture('xlsxData1').then((gcpdata) => {

                // cy.log('=============GCPDATA==================='+ JSON.stringify(gcpdata))

                    for (let j = 0; j < gcprowsLength; j++) {


                        var gmethodData = gcpdata.rows1[j].method
                        var gurlData = gcpdata.rows1[j].url
                        var gbodyData = gcpdata.rows1[j].body

                        // cy.log('Before========================'+ gcpdata.rows1[j].method)

                        // cy.log('Before========================'+ gurlData)
                        // cy.log('Before========================'+ gbodyData)
                        secondSheetData = { "methodType": gcpdata.rows1[j].method, "url": gcpdata.rows1[j].url, "body": gcpdata.rows1[j].body };

                        // secondSheetData = { "methodType": gmethodData.trim(), "url": gcpdata.rows1[j].url, "body": gcpdata.rows1[j].body };
                        // cy.log('After' +secondSheetData.body)

                        // cy.log('After============================'+ gmethodData)

                        vgridData.push(JSON.parse(JSON.stringify(secondSheetData)))


                    }





                    // Adding logic

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
                                        if(sheetTworecord.methodType == "POST"){


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
    
    
    


                                        }

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


                    // Closing logic
                })



            })




        })




    })


    // it('Validation', ()=>{
    //     expect(firstsheetResponse).to.equal(secondsheetResponse)
    // })


})