describe('Dodawanie produktu do koszuka', () => {
    it('1.Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
});

it('2.Otwieranie strony sklepu', () => {
    cy.wait(500)
    cy.contains('SHOP').click()
  });


  it('3.Wybieranie produktu z listy ', () => {
    cy.wait(500)
    cy.contains('Test').click()
  });

  it('4.Wybieranie wielkości produktu ', () => {
    cy.wait(500)
    cy.window().trigger('wheel', {
      deltaX: 0,
      deltaY: 1000
    })
    cy.wait(500)
    cy.get('#size').select('LARGE')
  });

  it('5.Wybieranie ilości zamówienia ', () => {
    cy.wait(500)
    cy.window().scrollTo('top', { easing: 'linear' })
    cy.wait(500)
    cy.get('#quantity').clear() 
    cy.wait(500)
    cy.window().scrollTo('top', { easing: 'linear' })
    cy.wait(500)
    cy.get('#quantity').type('3')
  });

  it('6.Dodawane zamównienia do koszka ', () => {
    cy.wait(500)
    cy.window().scrollTo('top', { easing: 'linear' })
    cy.wait(500)
    cy.contains('ADD TO CART').click()
    cy.wait(500)
    if(cy.contains('Request failed with status code 401'))
    {
      throw new Error("Błąd w dodawaniu do koszyka")
    }
    else
    {
      cy.log('Pomyślnie dodano produktu do koszyka')
    }
  });

});
