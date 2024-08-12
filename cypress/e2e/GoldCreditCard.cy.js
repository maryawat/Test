describe('Gold Credit card', () => {

  
  it('passes', () => {
    cy.visit('https://www.imbankgroup.com/ke')
    cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-icon').click()
    cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in').click()
    cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in').click()
    cy.get(':nth-child(6) > .feature-30-body-col > .card > .text-gray-5 > .card-body').click()
    //.should('have.text', 'I&M Visa International Gold Credit Card')
  
   setTimeout(3000);    
  })
})