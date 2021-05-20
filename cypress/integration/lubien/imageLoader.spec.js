describe('Poprawne ładowanie zdjęć',() => {
    it("Strona sklepu", () => {
        cy.visit("http://localhost:3000/shop");
    });

    it("Sprawdzanie kontenerow", () =>{
        cy.get('div[class="Product_Product__1mmyL"]')
        .find("img")
        .should('have.attr', 'src')
        .should('include','http://images.squarespace-cdn.com/content/v1/56de2ca44d088eec19559052/1604400265256-V399YIVJANZXOIO0M3BC/ke17ZwdGBToddI8pDm48kJNZEZ4u_y_BEBVqU1NPmRd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaSv-DT1c7meciqK6qBcLkb8-5ArOhaQ885MRtVp_wCMZDqXZYzu2fuaodM4POSZ4w/HC-300g-Australia-2020-SHOP.png')
    });

});