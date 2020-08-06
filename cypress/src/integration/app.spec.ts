export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  it('should start on HR', () => {
    cy.get('.card-title').should('contain', 'HR Functionality');
  });

  it('should navigate to Payroll', () => {
    cy.contains('Payroll').click();
    cy.get('.card-title').should('contain', 'Payroll Functionality');
  });
});
