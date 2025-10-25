const db = require("../models/query");

function formController(req, res) {
    res.render("../views/form");
}

function fromPostController(req, res) {

    let text = req.body.text;
    let username = req.body.username;
    const add = new Date();

    text = text === '' ? 'unknown' : text;
    username = username === '' ? 'unknown' : username;    

    db.addMessage({ text, username, add});

    res.redirect("/");
}


module.exports = { formController, fromPostController };