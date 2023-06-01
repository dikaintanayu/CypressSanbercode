describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#FirstName').type("Dika")
    cy.get('#LastName').type("Intan")
    cy.get('#Email').type("Apajadeh12@gmail.com")
    cy.get('#Password').type("Apajadeh123")
    cy.get('#ConfirmPassword').type("Apajadeh123")
    cy.get('#register-button').click()
    cy.get('.validation-summary-errors > ul > li').should('contain.text','The specified email already exists')
    //cy.get('.result').should('contain.text','Your registration completed')
  })
})