import Constants from "../Constants";

it("works", () => {
    cy.visit(Constants.MySigninsUrl);
    cy.wait(10000);
    cy.wrap("foo").should("equal", "foo");
});
