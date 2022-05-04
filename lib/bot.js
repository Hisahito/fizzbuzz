const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "TELEGRAM BOT TOKEN HERE";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});
// Listen for message by missions and returning the names of the users in that specific mission.
bot.on("messages", (msg) => {
    const chatId = msg.chat.id;
    const Mission = msg.text;
    if(Mission === "node") {
        const byMission = ExplorerController.getExplorersByMission(Mission);
        byMission.map((students) => {
            bot.sendMessage(chatId, students.username);
            
        });
    }if(Mission === "java") {
        const byMission = ExplorerController.getExplorersByMission(Mission);
        byMission.map((students) => {
            bot.sendMessage(chatId, students.username);
        });
    }else{
        bot.sendMessage(chatId, "Envia una mission valida");
    }
});