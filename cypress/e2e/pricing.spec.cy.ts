describe("Pricing", () => {
  it("renders the plans and annual per-site prices", () => {
    cy.visit("/pricing");
    cy.title().should("eq", "Pricing | Energy-i");
    cy.get("main h1").should("be.visible").and("have.text", "Pricing");
    cy.get("main article").should("have.length", 3);

    for (const [name, price] of [
      ["Monitor", "\u00a3200"],
      ["Optimise", "\u00a3600"],
      ["Control", "\u00a32,400"],
    ]) {
      cy.contains("main h2", name)
        .closest("article")
        .should("contain.text", price)
        .and("contain.text", "per year, per site");
    }

    cy.contains("main h2", "Optimise")
      .closest("article")
      .should("contain.text", "Most popular");
    cy.get("#control-deployment-note")
      .should("contain.text", "site audit")
      .and("contain.text", "compatible hardware installation");
  });
});