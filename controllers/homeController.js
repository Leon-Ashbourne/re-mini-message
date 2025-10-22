const { getAllMessages, getMessageByName, addMessageToDb } = require("../models/db");

async function homeController(req, res) {
    const messages = await getAllMessages();

    res.render("../views/home", {messages});
}




module.exports = homeController;