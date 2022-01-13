/// <reference types = "cypress" />

const $listEvent = '[href="/list-events"]';
function anchor(arg0) { return 'a' + (arg0); }

const $title = 'Upcoming events';
const $header2 = 'h2';

describe('Navigation', () => {
    it('should have a list events link that navigates to the list events view', () => {
        //navigate to the homepage
       // cy.visit('http://localhost:8080');
       cy.visit('/');
        // check that the "List Events" link is there

        cy.get('a[href="/list-events"]').click
        expect(cy.get($listEvent)).to.exist;
        //click on the list " List Events" link
        cy.get(anchor($listEvent)).click
        // verify a user has been redirected to the "List Events" page
      //  cy.get('h2').contains('Upcoming events');
        expect(cy.get($header2).contains($title)).to.exist;
   
    });
});