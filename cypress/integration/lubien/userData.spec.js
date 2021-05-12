describe('Dodawanie produktu do bazy', () => {

  before('Logowanie do bazy', () => {
    cy.visit('http://localhost:3001/admin');
    cy.get('input[name="email"]').type('admin@test.pl') 
    cy.get('input[name="password"]').type('Test123123!')
    cy.wait(500)
    cy.contains('Login').click()
  });

  it('Zarządzanie danymi',() => {
    
    cy.get('svg[preserveAspectRatio="xMidYMid meet"]').invoke('show')
    cy.get('path[d="M4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4zM4 6H28V8H4z"]').click(20, 20,{ multiple: true })
    cy.contains("Products Management").click()
    cy.wait(500)
    cy.get('a[href="/admin/resources/Product"]').click()

    cy.contains("Create new").click()

    cy.get('#title').type("Baza2") 
    cy.get('input[name="price.large"]')
    .type("20")
    cy.get('input[name="price.extraLarge"]')
    .type("40")
    cy.get('input[name="quantity.large"]')
    .type("1")
    cy.get('input[name="quantity.extraLarge"]')
    .type("1")
    cy.get('input[name="burnTime.large"]')
    .type("4")
    cy.get('input[name="burnTime.extraLarge"]')
    .type("6")
    cy.get('input[name="mainNotes"]')
    .type("bazaTest")
    cy.get('input[name="scentInspiration"]')
    .type("bazaScent")
    cy.get('input[name="location"]')
    .type("Bazowo")
    cy.get('input[name="scentProfile"]')
    .type("ScentBazowo")
    cy.get('input[name="topNotes"]')
    .type("bazaTest")
    cy.get('input[name="heartNotes"]')
    .type("bazaTest")
    cy.get('input[name="baseNotes"]')
    .type("bazaTest")
    cy.get('input[name="description"]')
    .type("bazaTest")
    cy.get('input[name="seriesName"]')
    .type("bazaTest")
    cy.contains("Add New Item").click()
    cy.get('input[name="imagesURL.0"]').type('http://images.squarespace-cdn.com/content/v1/56de2ca44d088eec19559052/1604400265256-V399YIVJANZXOIO0M3BC/ke17ZwdGBToddI8pDm48kJNZEZ4u_y_BEBVqU1NPmRd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaSv-DT1c7meciqK6qBcLkb8-5ArOhaQ885MRtVp_wCMZDqXZYzu2fuaodM4POSZ4w/HC-300g-Australia-2020-SHOP.png')
    cy.contains('Save').click()
    cy.wait(3000)

    cy.contains("admin@test.pl").click()
    cy.contains("Log out").click()

  }); 
});


describe('Sprawdzanie czy produkt istnieje na stronie', () =>{

  it('1.Ładowawnie strony głównej', () => {
    cy.visit('http://localhost:3000/');
  });

  it('2.Otwieranie strony sklepu', () => {
    cy.wait(500)
    cy.contains('SHOP').click()
  });


  it('3.Wybieranie produktu ', () => {
    cy.wait(500)
    cy.window().scrollTo('Baza2')
    cy.contains('Baza2')
  });
});