// Read more on support files here:
// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file

const geApiInterceptEndpoint = Cypress.env('NODE_ENV') === 'production'
  ? 'https://cdn.telus.digital/global/elements/v2/**'
  : 'https://staging.cdn.telus.digital/global/elements/v2/**'

beforeEach(() => {
  // intercept request to Global Elements API and return mockGlobalElementsData fixture
  cy.intercept(geApiInterceptEndpoint, {
    fixture: 'globalElementsData.json'
  }).as('mockGlobalElementsApi')
})
