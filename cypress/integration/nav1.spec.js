/// <reference types = "cypress" />

describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
        //navigate to the homepage
       // cy.visit('http://localhost:8080');
       cy.visit('/');
        // check that the "List Events" link is there

        cy.get('a[href="/list-events"]').click
        expect(cy.get('a[href="/list-events"]')).to.exist;
        //click on the list " List Events" link
        cy.get('a[href="/list-events"]').click
        // verify a user has been redirected to the "List Events" page
      //  cy.get('h2').contains('Upcoming events');
        expect(cy.get('h2').contains('Upcoming events')).to.exist;
   
    });
});