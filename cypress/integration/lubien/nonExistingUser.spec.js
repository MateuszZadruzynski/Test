describe('Logowanie nie istniejącego użytkownika', () => {
    it('1.Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
    });

    it('2.Przejście do logowania', () => {
        cy.wait(500)
        cy.contains('MY ACCOUNT').click()
      });

      it('3.Logowanie ', () => {
        cy.wait(500)
        cy.get('input[name="email"]').type('niemamnie@zwoho.com') 
        cy.wait(500)
        cy.get('input[name="password"]').type('zaq1@WSX')
        cy.wait(500)
        cy.contains('Continue').click()
        cy.contains('Wrong password or/and email.')
        .should('be.visible') 
      });

});