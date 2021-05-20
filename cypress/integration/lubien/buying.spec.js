describe('Dodawanie produktu do koszuka', () => {

before('Logowanie do bazy', () => {
  cy.visit('http://localhost:3000/');
  cy.wait(500)
  cy.contains('MY ACCOUNT').click()
  cy.wait(500)
  cy.get('input[name="email"]').type('cbx75717@zwoho.com') 
  cy.wait(500)
  cy.get('input[name="password"]').type('zaq1@WSX')
  cy.wait(500)
  cy.contains('Continue').click()
  cy.window().scrollTo('top', { easing: 'linear' })
});
it('1.Zakupki moi mili', () => {
    cy.wait(500)
    cy.contains('SHOP').click()
    cy.wait(500)
    cy.contains('Test').click()
    cy.wait(500)
    cy.window().trigger('wheel', {
      deltaX: 0,
      deltaY: 1000
    })
    cy.wait(500)
    cy.get('#size').select('LARGE').should('have.value','large')

    cy.wait(500)
    cy.window().scrollTo('top', { easing: 'linear' })
    cy.wait(500)
    cy.get('#quantity').clear() 
    cy.wait(500)
    cy.window().scrollTo('top', { easing: 'linear' })
    cy.wait(500)
    cy.get('#quantity').type('3').should('have.value','3')

    cy.wait(500)
    cy.window().scrollTo('top', { easing: 'linear' })
    cy.wait(500)
    cy.contains('ADD TO CART').click()
    cy.wait(500)

    cy.get('path[d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"]').click();
  });

});
