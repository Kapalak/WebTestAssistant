/// <reference types="cypress" />

describe('001 Askia web tests', () => {

  it('Login as a user and navigate on the menu', () => {
    cy.visit(Cypress.env('EVQ_URL'))

    cy.screenshot()

    cy.get('#UserName')
      .type(Cypress.env('EVQ_USERNAME'))
      .should('have.value', Cypress.env('EVQ_USERNAME'))

    cy.get('#Password')
      .type(Cypress.env('EVQ_PASSWORD'))
      .should('have.value', Cypress.env('EVQ_PASSWORD'))

    cy.screenshot()

    cy.get('#login')
      .click();

    cy.get('.username')
      .invoke('attr', 'title')
      .should('eq', Cypress.env('EVQ_USERNAME'));

    cy.xpath('//a[@title="Guides et bilans"]')
      .should('have.css', 'font-family', 'PlutoSansRegular');

    cy.screenshot()

    cy.xpath('//a[@title="Guides et bilans"]')
      .click();

    cy.url().should('include', '/GuidesEtBilans');

    cy.screenshot()

    cy.window().then((win) => {
      win.eval("$('.nav-link-text:nth(3)').click()");
     });

     cy.url().should('include', '/fiches');

     cy.window().then((win) => {
      win.eval("$('.nav-link-text:nth(4)').click()");
     });

     cy.url().should('include', '/Ententes');

    cy.screenshot()
  })
})
