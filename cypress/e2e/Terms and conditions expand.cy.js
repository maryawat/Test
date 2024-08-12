
/// <reference types="cypress"/>

describe('launch spec',() => {
    it('passes', () => {
      cy.visit('https://www.imbankgroup.com/ke')
      cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-icon').click()
      cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in').click()
      cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in').click()
      cy.get(':nth-child(8) > .feature-30-body-col > .card > .text-gray-5 > .card-body').click();
      // Scrolling down to find the "Terms and Conditions" element
       // Scrolling down a little bit
       cy.get('.accordion-1-title')
    .contains('Terms and Conditions')
    .scrollIntoView()
    .click();
       
    });
  });