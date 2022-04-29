// Creando clase que maneja la logica en la lista de explorers


class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const usernames = explorersByMission.filter((explorer) => explorer.githubUsername);
        return usernames;
    }
}


module.exports = ExplorerService;