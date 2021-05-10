describe('Zakup', () => {
    it('1.Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
});

it('2.Otwieranie strony sklepu', () => {
    cy.contains('SHOP').click()
  });


  it('3.Wybieranie produktu z listy ', () => {
    cy.contains('Test').click()
  });

  it('4.Wybieranie wielkości produktu ', () => {
    cy.get('#size').select('LARGE')
  });

  it('5.Wybieranie ilości zamówienia ', () => {
    cy.get('#quantity').clear() 
    cy.get('#quantity').type('3')
  });

  it('6.Dodawane zamównienia do koszka ', () => {
    cy.contains('ADD TO CART').click()
  });

});