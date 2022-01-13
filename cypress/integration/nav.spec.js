/// <reference types = "cypress" />

$listEvent = '[href="/list-events"]';
function anchor(arg0) { return 'a' + (arg0); }

describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
        //navigate to the homepage
       // cy.visit('http://localhost:8080');
       cy.visit('/');
        // check that the "List Events" link is there
        expect(cy.get($listEvent)).to.exist;
        //click on the list " List Events" link
        cy.get(anchor($listEvent)).click
        // verify a user has been redirected to the "List Events" page
      //  cy.get('h2').contains('Upcoming events');
        expect(cy.get('h2').contains('Upcoming events')).to.exist;
    });
});