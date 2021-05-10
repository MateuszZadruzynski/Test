describe('Zakup', () => {
    it('Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
});

it('Otwieranie sklepu', () => {
    cy.get('.span').contains('SHOP');
  });

});