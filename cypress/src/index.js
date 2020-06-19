"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var testOutputDirectory = "./test-results";
if (!fs.existsSync(testOutputDirectory)) {
    fs.mkdirSync(testOutputDirectory);
}
describe("My First Test", function () {
    it('finds the content "type"', function () {
        cy.visit("https://example.cypress.io");
        cy.contains("type");
    });
});
