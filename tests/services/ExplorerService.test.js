// Unitary Test for ExplorerService class

const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Testing ExplorerService class", () => {
    test("Testing the class ExplorerService", () => {
        const explorerService = new ExplorerService();
        expect(explorerService).toBeDefined();
    });

    test("Testing the method filterByMission", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Testing the method getAmountOfExplorersByMission", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "node"}];
        const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountOfExplorers).toBe(3);
    });

    test("Testing the method getExplorersUsernamesByMission", () => {
        const explorers = [{mission: "node", githubUsername: "ajolonauta"}, {mission: "node", githubUsername: "ajolonauta2"}, {mission: "node", githubUsername: "ajolonauta3"}];
        const explorerUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorerUsernames.length).toBe(3);
    });
});

