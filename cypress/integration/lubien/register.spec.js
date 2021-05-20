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
        .should('have.value','CypressTest@gmail.com')
        cy.wait(500)
        cy.get('#password').type('zaq1@WSX')
        cy.wait(500)
        cy.get('#confirmPassword').type('zaq1@WSX')
        cy.wait(500) 
        cy.get('#phone').type('123431567')
        .should('have.value','123431567')
        cy.wait(500)
        cy.get('#firstName').type('Test')
        .should('have.value','Test')
        cy.wait(500)
        cy.get('#lastName').type('Testing')
        .should('have.value','Testing')
        cy.wait(500)
        cy.get('input[name="address.street"]').type('Publiczna')
        .should('have.value','Publiczna')
        cy.wait(500)
        cy.get('input[name="address.houseNumber"]').type('27')
        .should('have.value','27')
        cy.wait(500)
        cy.get('input[name="address.city"]').type('Bydgoszcz')
        .should('have.value','Bydgoszcz')
        cy.wait(500)
        cy.get('input[name="address.county"]').type('Poland')
        .should('have.value','Poland')
        cy.wait(500)
        cy.get('input[name="address.postCode"]').type('TN22 8NJ')
        .should('have.value','TN22 8NJ')
        cy.wait(500)
        cy.contains('Continue').click()
  });

  it('5.Przejście do logownaia ', () => {
        cy.contains('SWITCH TO SIGNIN').click()
        cy.window().scrollTo('top', { easing: 'linear' })
    });
});