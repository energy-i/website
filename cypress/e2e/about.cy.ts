describe("About us", () => {
  for (const viewport of ["iphone-x", "macbook-15"] as const) {
    it(`renders the mission and two founders on ${viewport}`, () => {
      cy.viewport(viewport);
      cy.visit("/about");

      cy.title().should("eq", "About | Energy-i");
      cy.get("main > section").should("have.length", 2);
      cy.get("main > section")
        .first()
        .find("h1")
        .should("be.visible")
        .and("have.text", "Our mission");
      cy.get("main > section")
        .last()
        .within(() => {
          cy.get("h2").should("contain.text", "Meet the founders");
          cy.get("article").should("have.length", 2);
          cy.get("article").each(($founder) => {
            cy.wrap($founder).find("h3").should("be.visible");
            cy.wrap($founder).should("contain.text", "Co-founder");
          });
        });
    });
  }
});
