/// <reference types ="cypress"  />

describe('Create Event', () => {
    it('should create a new event', () => {
        //navigate to home page

       // cy.visit('http://localhost:8080');
        cy.visit('/');

        // go to the "Create Event" page
       cy.get('a[href="/create-event"]').click();

        // fill-in the form
        cy.get('#event-name').type('Summer Concert');
        cy.get('#event-venue').type('Nurnberg EventHall A');

       
        cy.get('#event-date-month').select('11');
        cy.get('#event-date-day').select('5');
        cy.get('#event-date-year').select('2024');
        cy.get('#ticket-quantity').type('10');

        cy.get('textarea[name="event-notes"]').type('Don\'t miss out!');

        cy.get('input[name="event-image"]').check('./assets/event-2.jpg');
        // submit the form
        
        cy.get('button').contains('Create').click();
      //  cy.get('#create-btn').click();

        //assert that a new event has been created

        //1ST WAY OF ASSERTION 
        cy.get('h2').should('have.text','Event Details');

        //2ND WAY OF ASSERTION 
        expect(cy.get('h2').contains('Event Details')).to.exist;

    });
});
