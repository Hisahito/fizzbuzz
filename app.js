// Refactorizando codigo spagetti

// Importando servicios y utilitis
const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerService = require("./lib/services/ExplorerService");
const Reader = require("./lib/utils/Reader");

const explorers = Reader.readJsonFile("explorers.json"); // esto deberia de regresar la lista de explorers del archivo
//console.log(explorers)

// Aplicacion del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(usernames);


// Validaciones
// Aplicando la clase FizzbuzzService sobre la lista de explorers
const explorer1 = {name: "Explorer1", score: 1};
FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}