describe('Logowanie użytkownika', () => {
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

      it('4.Ustawienia konta', () => {
        cy.wait(500)
        cy.contains('Account settings').click()
        cy.get('input[name="email"]')
        cy.get('input[name="confirmEmail"]')
        cy.get('input[name="actualPassword"]')
        cy.get('input[name="newPassword"]')
        cy.get('input[name="confirmNewPassword"]')
      });

      it('5.Historia zamówień', () => {
        cy.wait(500)
        cy.contains('Order history').click()
        cy.contains("You don't have any orders yet!")
      });

      it('6.Dane osobiste', () => {
        cy.wait(500)
        cy.contains('Personal details').click()
        cy.get('input[name="phone"]')
        cy.get('input[name="firstName"]')
        cy.get('input[name="lastName"]')
        cy.get('input[name="companyName"]')
      });

      it('7.Dane adresowe', () => {
        cy.wait(500)
        cy.contains('Address details').click()
        cy.get('input[name="street"]')
        cy.get('input[name="houseNumber"]')
        cy.get('input[name="addressAdditionalInfo"]')
        cy.get('input[name="city"]')
        cy.get('input[name="county"]')
        cy.get('input[name="postCode"]')
      });


    it('8.Wylogownie',() => {
      cy.get('svg[class="MuiSvgIcon-root"]').invoke('show')
      cy.get('path[d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"]').click()
    });

    it('9.Koniec',() => {
      cy.contains('OK').click()
    });
});
