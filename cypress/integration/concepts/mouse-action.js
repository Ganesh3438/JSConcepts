/// <reference types = "cypress"/>

describe('Mouse action', function () {


   it('ScrollIntoView', function () {

      cy.visit('https://webdriveruniversity.com/');

      //    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
      cy.get('#actions').scrollIntoView();

   })


   it('Drag and drop', function () {

      cy.visit('https://webdriveruniversity.com/');

      cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

      //    cy.wait(10000)

      cy.get('#draggable').trigger('mousedown', { which: 1 });

      cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });



   })



   it('Double click', function () {

      cy.visit('https://webdriveruniversity.com/');

      cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

      //    cy.wait(10000)

      cy.get('#double-click').find('h2').dblclick();


   })

   it.only('Click and hold ', function () {

      cy.visit('https://webdriveruniversity.com/');

      cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

      //    cy.wait(10000)

      cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {

         expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');

      })


   })


   it.only('Fixture', () => {

      cy.fixture('example.json').then((data)=>{
         this.data = data;
         cy.log(JSON.stringify(this.data))
         

      })
      
   })

   


})