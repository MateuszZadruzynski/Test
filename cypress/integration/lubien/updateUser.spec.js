describe('Aktualizowanie użytkownika', () => {
    it('1.Ładowawnie strony głównej', () => {
      cy.visit('http://localhost:3000/');
    });

    it('2.Przejście do logowania', () => {
        cy.wait(500)
        cy.contains('MY ACCOUNT').click()
      });

      it('3.Logowanie ', () => {
        cy.wait(500)
        cy.get('input[name="email"]').type('cbx75717@zwoho.com') 
        cy.wait(500)
        cy.get('input[name="password"]').type('zaq1@WSX')
        cy.wait(500)
        cy.contains('Continue').click()
        cy.window().scrollTo('top', { easing: 'linear' })
      });

      it('Aktualizacja danych personalnych', () =>{
        cy.get('#phone').type('123431567')
        .should('have.value','123431567')
        cy.wait(500)
        cy.get('#firstName').type('Test')
        .should('have.value','Test')
        cy.wait(500)
        cy.get('#lastName').type('Testing')
        .should('have.value','Testing')
        cy.wait(500)
        cy.contains('OK').click()
      });
});