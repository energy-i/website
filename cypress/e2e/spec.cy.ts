describe("Homepage", () => {
  it("renders the homepage", () => {
    cy.visit("/");
    cy.get("main h1")
      .should("be.visible")
      .and("contain.text", "digital energy advisor");
  });
});
