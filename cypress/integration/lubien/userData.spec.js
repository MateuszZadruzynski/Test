describe('Dodawanie produktu', () => {
  it('1.Ładowawnie strony głównej', () => {
    cy.visit('http://localhost:3001/admin');
  });
  
  it('2.Logowanie do bazy', () => {
    cy.get('input[name="email"]').type('admin@test.pl') 
    cy.get('input[name="password"]').type('Test123123!')
    cy.wait(500)
    cy.contains('Login').click()
  });

  it('3.Zarządzanie użytkownikami',() => {
    cy.get('svg[preserveAspectRatio="xMidYMid meet"]').invoke('show')
    cy.get('path[d="M4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4zM4 6H28V8H4z"]').click(20, 20,{ multiple: true })
    cy.contains("Products Management").click()
    cy.wait(500)
    cy.get('a[href="/admin/resources/Product"]').click()
  }); 
  it('4.Dodawanie produktu',() => {
    cy.contains("Create new").click()
  });
  it('5.Uzupełneinie danych', () => {
    cy.get('input[id="title"]').type('TestBaza') 
    cy.wait(500)
    cy.get('input[id="price.large"]').type('20')
    cy.wait(500)
    cy.get('input[id="price.extraLarge"]').type('40')
    cy.wait(500)
    cy.get('input[id="quantity.large"]').type('1')
    cy.wait(500)
    cy.get('input[id="quantity.extraLarge"]').type('1')
    cy.wait(500)
    cy.get('input[id="burnTime.large"]').type('4')
    cy.wait(500)
    cy.get('input[id="burnTime.extraLarge"]').type('6')
    cy.wait(500)
    cy.get('input[id="mainNotes"]').type('bazaTest')
    cy.wait(500)
    cy.get('input[id="scentInspiration"]').type('bazaScent')
    cy.wait(500)
    cy.get('input[id="location"]').type('Bazowo')
    cy.wait(500)
    cy.get('input[id="scentProfile"]').type('ScentBazowo')
    cy.wait(500)
    cy.get('input[id="topNotes"]').type('bazaTest')
    cy.wait(500)
    cy.get('input[id="heartNotes"]').type('bazaTest')
    cy.wait(500)
    cy.get('input[id="baseNotes"]').type('bazaTest')
    cy.wait(500)
    cy.get('input[id="description"]').type('bazaTest')
    cy.wait(500)
    cy.get('input[id="seriesName"]').type('bazaTest')
    cy.wait(500)
    cy.contains("Add New Item").click()
    cy.get('input[name="imagesURL.0"]').type('http://images.squarespace-cdn.com/content/v1/56de2ca44d088eec19559052/1604400265256-V399YIVJANZXOIO0M3BC/ke17ZwdGBToddI8pDm48kJNZEZ4u_y_BEBVqU1NPmRd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaSv-DT1c7meciqK6qBcLkb8-5ArOhaQ885MRtVp_wCMZDqXZYzu2fuaodM4POSZ4w/HC-300g-Australia-2020-SHOP.png')
    cy.wait(500)
    cy.contains('Save').click()
  });

  it('6.Wylogowanie z administratora',() => {
    cy.contains("admin@test.pl").click()
    cy.contains("Log out").click()
  });

  it('7.Ładowawnie strony głównej', () => {
    cy.visit('http://localhost:3000/');
  });

  it('8.Otwieranie strony sklepu', () => {
    cy.wait(500)
    cy.contains('SHOP').click()
  });


  it('9.Wybieranie produktu ', () => {
    cy.wait(500)
    cy.contains('TestBaza')
  });
});