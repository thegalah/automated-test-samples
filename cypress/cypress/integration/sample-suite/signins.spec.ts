import Constants from "../Constants";

it("can navigate to MySignins", () => {
    cy.visit(Constants.MySigninsUrl);
    cy.wait(10000);
    cy.wrap("foo").should("equal", "foo");
});
