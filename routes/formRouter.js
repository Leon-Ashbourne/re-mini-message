const { Router } = require("express");
const { formController, fromPostController } = require("../controllers/formController");


const formRouter = Router();

formRouter.get("/", formController);
formRouter.post("/", fromPostController);



module.exports = formRouter;