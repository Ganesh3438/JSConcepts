/// <reference types="cypress" />

describe("Switching window using cypress", () => {


    it('Handling multiple windows', function () {
    
            cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
           

            cy.get('#button1').click()

            cy.on('window:alert', (str)=>{
                expect(str).to.equal('I am an alert box!');
            })
    })
    
    
    })