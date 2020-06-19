import * as fs from "fs";

const testOutputDirectory = "./test-results";

if (!fs.existsSync(testOutputDirectory)) {
    fs.mkdirSync(testOutputDirectory);
}

describe("My First Test", () => {
    it('finds the content "type"', () => {
        cy.visit("https://example.cypress.io");

        cy.contains("type");
    });
});
