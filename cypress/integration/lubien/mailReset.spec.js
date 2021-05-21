describe('Resetowanie hasła', () => {
  it('Przejście do logowania', () => {
    cy.visit('http://localhost:3000/my-account');
    });
  
    it('Resetowanie hasła ', () => {
      cy.contains('Reset your password').click()
    });
  
    it('Wpisywanie maila', () => {
      cy.wait(500)
      cy.get('input[name="email"]').type('testertestuje@int.pl') 
      cy.contains('Continue').click()
    })

  it('Przejście do strony z pocztą', () => {
    cy.wait(500)
    cy.visit('https://int.pl/#/login-clear');
  })

  it('Logowanie na maila', () => {
    cy.wait(500)
    cy.get('input[id="emailId"]').type('testertestuje@int.pl') 
    cy.get('input[id="passwordId"]').type('zaq1@WSX') 
    cy.contains('loguję się').click()
    cy.wait(1000)

    })
    
    it('Pobieranie linku', () =>{
      const getIframeDocument = () => {
        return cy
        .get('iframe[nxt-message-iframe-data="message"]')
        .its('0.contentDocument').should('exist')
      }
  
      const getIframeBody = () => {
        // pobieranie dokumentu
        return getIframeDocument()
        // srawdzenie cz dokument się załadował
        .its('body').should('not.be.undefined')
        // dostęp do elementów iframe
        .then(cy.wrap)
      }
      getIframeBody().find('a').click({ multiple: true })
      
      getIframeBody().find('a', 'get').then(($el) => {
        const link = $el.attr('href')
        cy.visit(link)
      })
  
    })
  
});  