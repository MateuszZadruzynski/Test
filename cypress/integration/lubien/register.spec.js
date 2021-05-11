describe('Rejestracja użytkownika nie instniejącego w bazie', () => {
    it('1.Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
    });

    it('2.Przejście do strony logowania', () => {
        cy.wait(500)
        cy.contains('MY ACCOUNT').click()
      });

    it('3.Przejście do formualrza rejestracji ', () => {
        cy.contains('SWITCH TO SIGNUP').click()
    });

    it('4.Rejestracja użytkownika', () => {
        cy.get('#email').type('CypressTest@gmail.com') 
        cy.wait(500)
        cy.get('#password').type('zaq1@WSX')
        cy.wait(500)
        cy.get('#confirmPassword').type('zaq1@WSX')
        cy.wait(500) 
        cy.get('#phone').type('123431567')
        cy.wait(500)
        cy.get('#firstName').type('Test')
        cy.wait(500)
        cy.get('#lastName').type('Testing')
        cy.wait(500)
        cy.get('input[name="address.street"]').type('Publiczna')
        cy.wait(500)
        cy.get('input[name="address.houseNumber"]').type('27')
        cy.wait(500)
        cy.get('input[name="address.city"]').type('Bydgoszcz')
        cy.wait(500)
        cy.get('input[name="address.county"]').type('Poland')
        cy.wait(500)
        cy.get('input[name="address.postCode"]').type('GB455DU')
        cy.wait(500)
        cy.contains('Continue').click()
  });

  it('5.Przejście do logownaia ', () => {
        cy.contains('SWITCH TO SIGNIN').click()
        cy.window().scrollTo('top', { easing: 'linear' })
    });
});