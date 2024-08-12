/// <reference types="cypress"/>

describe('Fill in the contact form', () => {
  it('should fill in all necessary information in the form fields', () => {
    cy.visit('https://www.imbankgroup.com/ke/about-us/contact/');

    // Fill in the form fields
    cy.get('input[name="input_2"]').type('Mary Watt').should('have.value', 'Mary Watt'); // Full Name
    cy.get('input[name="input_3"]').type('maryawat@gmail.com').should('have.value', 'maryawat@gmail.com'); // Email Address
    cy.get('input[name="input_4"]').type('0735611542').should('have.value', '0735611542'); // Phone Number
    cy.get('select[name="input_5"]').select('Kenyatta Avenue').should('have.value', 'Kenyatta Avenue'); // Nearest Branch

    // Select a radio button option
    cy.get('#input_17_6 input[type="radio"]').first().check(); // Choose the first option

    // Check the consent checkbox
    cy.get('#input_17_9_1').check(); // Consent checkbox

        // Optionally, you can fill in additional fields if needed

    // Assertion to verify the first value is checked
    cy.get('#input_17_6 input[type="radio"]').first().should('be.checked');
    cy.get('#input_17_9_1').should('be.checked');

// Remove the 'disabled' attribute from the submit button
cy.get('#gform_submit_button_17').invoke('removeAttr', 'disabled');
// Assert that the submit button is not clicked
cy.get('#gform_submit_button_17').should('not.have.attr', 'clicked');


  });
});
