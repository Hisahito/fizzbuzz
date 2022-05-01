// Iniciando pruebas en la clase ExplorerController
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Testing ExplorerController´s methods", () => {
    test("Test in getExplorerAmountByMission", () => {
        const amount = ExplorerController.getExplorersAmountByMission("java");
        expect(amount).toBe(5);
    });
});