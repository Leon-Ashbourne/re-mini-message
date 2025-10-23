const { addMessageToDb } = require("../models/db");

function formController(req, res) {
    res.render("../views/form");
}

function fromPostController(req, res) {

    let text = req.body.text;
    let user = req.body.user;
    const added = new Date();

    text = text === '' ? 'unknown' : text;
    user = user === '' ? 'unknown' : user;    

    addMessageToDb({text, user, added});

    res.redirect("/");
}


module.exports = { formController, fromPostController};