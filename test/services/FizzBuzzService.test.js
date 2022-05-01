// Pruebas en la clase FizzBuzzService
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

const explorers = [
    {name: "Explorador1", score:1, trick: 1},
    {name: "Explorador2", score:5, trick: "BUZZ"},
    {name: "Explorador3", score:3, trick: "FIZZ"},
    {name: "Explorador4", score:15, trick: "FIZZBUZZ"},
];
describe("pruebas en la clase FizzbuzzServices", () => {
    test("probando applyValidationInExplorer", () => {
        const explorer1 = FizzbuzzService.applyValidationInExplorer(explorers[0]);
        expect(explorer1.trick).toBe(1);

        const explorer2 = FizzbuzzService.applyValidationInExplorer(explorers[1]);
        expect(explorer2.trick).toBe("BUZZ");

        const explorer3 = FizzbuzzService.applyValidationInExplorer(explorers[2]);
        expect(explorer3.trick).toBe("FIZZ");

        const explorer4 = FizzbuzzService.applyValidationInExplorer(explorers[3]);
        expect(explorer4.trick).toBe("FIZZBUZZ");
    });
    test("probando applyValidationInNumber", () => {
        const explorer1 = FizzbuzzService.applyValidationInNumber(1);
        expect(explorer1).toBe(1);

        const explorer2 = FizzbuzzService.applyValidationInNumber(5);
        expect(explorer2).toBe("BUZZ");

        const explorer3 = FizzbuzzService.applyValidationInNumber(3);
        expect(explorer3).toBe("FIZZ");

        const explorer4 = FizzbuzzService.applyValidationInNumber(15);
        expect(explorer4).toBe("FIZZBUZZ");

        const explorer5 = FizzbuzzService.applyValidationInNumber(30);
        expect(explorer5).toBe("FIZZBUZZ");
    });
});