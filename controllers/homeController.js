const db = require("../models/query");

async function homeController(req, res) {
    const messages = await db.getMessages();

    res.render("../views/home", {messages});
}




module.exports = homeController;