const { addMessageToDb } = require("../models/db");

function formController(req, res) {
    res.render("../views/form");
}

function fromPostController(req, res) {

    const text = req.body.text;
    const user = req.body.user;
    const added = new Date();

    addMessageToDb({text, user, added});

    res.redirect("/");
}


module.exports = { formController, fromPostController};