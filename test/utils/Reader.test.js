// Unitary Test for Reader class
const Reader = require('./../../lib/utils/Reader');
const fs = require('fs');

describe('Reader class', () => {
    test('Testing the class Reader', () => {
        const reader = new Reader();
        expect(reader).toBeDefined();
    })
})