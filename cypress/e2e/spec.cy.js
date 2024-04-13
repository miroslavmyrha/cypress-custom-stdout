describe('template spec', () => {
  context('trerereer', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io')
    })
  
    it('Test label for passes', () => {
      cy.get('h1').should('exist')
    })
  
    it('Test label for passes2', () => {
      cy.get('h1').should('exist')
    })
  
    it('Test label for fail', () => {
      cy.get('nonExistingElement').should('exist')
    })
  
    it('Test label for fail2', () => {
      cy.get('nonExistingElement').should('exist')
    })
  
    it('Test label for passes3', () => {
      cy.get('h1').should('exist')
    })
  })
})