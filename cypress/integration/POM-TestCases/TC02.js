import HomePage_PO from "../../support/pageObjects/WebDriverUniversity/HomePage_PO";

/// <reference types="cypress"/>
let rowsLength ;
describe('Test', () => {
    const homePage_po = new HomePage_PO;;

    before(function () {
        cy.task('readXlsx', {file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1"}).then((rows) =>{

           rowsLength = rows.length;

           cy.writeFile('cypress/fixtures/xlsxData.json', {rows})


        })

        // cy.visit(Cypress.env('webdriveruni_homepage'))
        homePage_po.visitHomePage();
        homePage_po.switchToWindow()
    })

    // beforeEach(function(){
    //     homePage_po.visitHomePage();
    //     homePage_po.switchToWindow()
    // })

    
    it('Filling form', ()=>{
        
        cy.fixture('xlsxData').then((data)=>{
            
            for(let i =0; i<rowsLength; i++){

                homePage_po.fillingContactForm(data.rows[i].firstName, data.rows[i].lastName, data.rows[i].email, data.rows[i].comments )
                cy.go('back');
            }
        })
        
    })






})
