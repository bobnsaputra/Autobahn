describe('Test Sign Up', () => {
  it('Account already exist', () => {
    cy.visit('https://autobahn.security/signup')
    cy.get('input[name="email"]')
        .type('hitipa9111@jobsfeel.com')
    cy.get('input[name="password"]')
        .type('asdfJKL.11')
    cy.get('.button-wrapper > .custom-button > .btn > .button-text')
     .click()
     cy.wait(10000)
    cy.get('body').should('contain', 'Account already exists.')
  })

  it('Successfully signing up', () => {
    // make a temporary email maually
    cy.visit('https://autobahn.security/signup')
    cy.get('input[name="email"]')
    .type('yerede6501@jobsfeel.com')
    cy.get('[name="password"]')
    .type('asdfJKL.11')
    cy.get('.button-wrapper > .custom-button > .btn > .button-text')
    .click()
    cy.wait(10000)
    cy.get('[name="first-name"]')
    .type('hitipa9111')
    cy.get('[name="last-name"]')
     .type('jobsfeel.com')
    cy.get('[name="industry"]')
      .click()
    cy.contains('Commercial Services')
      .click()
    cy.get('[name="phone-number"]')
      .type('2342346525')
    cy.contains('Start using Autobahn')
      .click()
    cy.get('body').should('contain', 'Join existing account')
  })
})  
