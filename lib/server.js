// Inicializando un servidor con nuestra API
const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({massage: "FizzBuzz API Welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission",  (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.status(200).json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    response.json({mission: mission, quantity: ExplorerController.getExplorersAmountByMission(mission)});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersNames = ExplorerController.getExplorerUsernamesByMission(mission);
    response.status(200).json(explorersNames);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzzResult = ExplorerController.applyFizzbuzz(score);
    response.status(200).json({score: score, trick: fizzbuzzResult});
});