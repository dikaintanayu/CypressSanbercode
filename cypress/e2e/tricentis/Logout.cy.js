describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://demowebshop.tricentis.com/')
      cy.get('.ico-login').click()
      cy.get('#Email').type('Apajadeh12@gmail.com')
      cy.get('#Password').type("Apajadeh123")
      cy.get('#RememberMe').click()
      cy.get('form > .buttons > .button-1').click()
      cy.get('.ico-logout').click()
    })
  })