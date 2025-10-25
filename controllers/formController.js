const db = require("../models/query");

function formController(req, res) {
    res.render("../views/form");
}

function fromPostController(req, res) {

    let text = req.body.text;
    let user = req.body.user;
    const add = new Date();

    text = text === '' ? 'unknown' : text;
    user = user === '' ? 'unknown' : user;    

    db.addMessage({ text, user, add});

    res.redirect("/");
}


module.exports = { formController, fromPostController };