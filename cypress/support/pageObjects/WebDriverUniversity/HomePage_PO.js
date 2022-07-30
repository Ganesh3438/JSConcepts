class HomePage_PO{

    
//   contact-us_css = '#contact-us'

visitHomePage(){
    cy.visit(Cypress.env('webdriveruni_homepage'));
}

elementVisibleMethod(){
   cy.get('#contact-us').should('be.visible');
}

switchToWindow(){
    cy.get('#contact-us').then(function(l){

        const txt = l.prop('href');
        cy.log(txt)
  
        cy.visit(txt);
  })
}

fillingContactForm(firstName, lastName, email, Comments){
    cy.get('[name="first_name"]').clear().type(firstName)
    cy.get('[name="last_name"]').clear().type(lastName)
    cy.get('[name="email"]').clear().type(email)
    cy.get('[name="message"]').clear().type(Comments)
    cy.xpath('(//input[@class="contact_button"])[2]').click()
}


}

export default HomePage_PO;