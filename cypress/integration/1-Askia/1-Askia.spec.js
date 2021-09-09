/// <reference types="cypress" />

describe('001 Askia web tests', () => {

  it('Login as a user and navigate on the menu', () => {
    cy.visit(Cypress.env('ASKIA_URL'))

    cy.xpath('//a[@title="Askia - Automating insight"]')
        .should('be.visible')

    cy.screenshot()

    cy.xpath('//a[@title="Market research solutions by Askia"]')
      .click();

    cy.screenshot();

    cy.xpath('//li[@class="dropdown open"]/ul/li/a[@title="Askiadesign: survey design software by Askia"]')
      .click();

    cy.screenshot()
  })
})
