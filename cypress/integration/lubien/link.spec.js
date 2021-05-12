describe('Testowanie linków na stronie',() => {
    it("Strona domowa", () => {
        cy.visit("http://localhost:3000/");
        cy.get("a:contains(HOMEPAGE)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.have.attr("href", "/");
      });
    });
    it("Sklep", () => {
        cy.get("a:contains(SHOP)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });
    it("Informcje o stronie", () => {
        cy.get("a:contains(ABOUT LUBIEN)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });
    it("Konserwacja świeczek", () => {
        cy.get("a:contains(CANDLE CARE)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });
    it("Strona inwentarza", () => {
        cy.get("a:contains(STOCKISTS)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });
    it("Blog", () => {
        cy.get("a:contains(BLOG)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/blog");
      });
    });
    it("Warunki świadczenia usług", () => {
        cy.get("a:contains(TERMS OF SERVICE)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });
    it("Dostawa i zwroty", () => {
        cy.get("a:contains(DELIVERY & RETURNS)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });

    it("prywatność", () => {
        cy.get("a:contains(PRIVACY POLICY)").should($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.not.have.attr("href", "/");
      });
    });
});