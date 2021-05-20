describe('Dodawanie produktu do koszuka', () => {
it('1.Przejście do logowania', () => {
    cy.wait(500)
    cy.contains('MY ACCOUNT').click()
  });

  it('2.Resetowanie hasła ', () => {
    cy.wait(500)
    cy.get('input[name="email"]').type('testertestuje@int.pl') 
    cy.wait(500)
    cy.get('input[name="password"]').type('1231232323123123')
    cy.wait(500)
    cy.contains('Continue').click()
    cy.contains('Reset your password').click()
  });

});