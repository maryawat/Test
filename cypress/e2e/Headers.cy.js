
/// <reference types="cypress"/>

describe('Navigate through all headers on the homepage', () => {
  it('should navigate through all headers on the homepage', () => {
    cy.visit('https://www.imbankgroup.com/ke/') // Visit the homepage

    // Get all header elements within the page content
    cy.get('h1, h2, h3, h4, h5, h6').each(($header) => {
      // Extract the text of the header element
      const headerText = $header.text().trim();

      // Output header text to the Cypress log (optional)
      cy.log(`Navigating to: ${headerText}`);

      // Optionally, you can scroll to the header for better visibility
      cy.wrap($header).scrollIntoView();

      // Click on the header element (if applicable)
      // Note: Headers are not typically clickable, so clicking may not be necessary
    });
  });
});

