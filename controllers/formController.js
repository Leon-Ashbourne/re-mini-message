function formController(req, res) {
    res.render("../views/form");
}

function fromPostController(req, res) {
    console.log("recieved succesfully");
}


module.exports = { formController, fromPostController};