describe('Home', () => {
  it('renders a heading', () => {
    cy.visit('/')
    cy.get('h3').contains('(Insert Homepage Here)')
  })
})
