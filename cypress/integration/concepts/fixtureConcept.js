/// <reference types = "cypress"/>

describe('Fixture file concept', ()=>{

before(function(){
    cy.fixture('example.json').then(function(data){
        this.data = data;
        // globalThis.data = data;
    })
})

it('Testing' , function(){

cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
// cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
cy.get('input[name="first_name"]').type(this.data.firstName);
cy.get('input[name=last_name]').type(this.data.lastName);

})


})