describe('Dodawanie produktu do koszuka', () => {
    it('1.Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
    });

    it('2.Przejście do logowania', () => {
        cy.wait(500)
        cy.contains('MY ACCOUNT').click()
      });

      it('3.Logowanie ', () => {
        cy.wait(500)
        cy.get('#email').type('CypressTest@gmail.com') 
        cy.wait(500)
        cy.get('#password').type('zaq1@WSX')
        cy.wait(500)
        cy.contains('Continue').click()
      });
});
