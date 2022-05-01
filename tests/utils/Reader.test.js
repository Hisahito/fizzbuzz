// Unitary Test for Reader class
const Reader = require("./../../lib/utils/Reader");

describe("Reader class", () => {
    test("Testing the class Reader", () => {
        const reader = new Reader();
        expect(reader).toBeDefined();
    });
});