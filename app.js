const express = require("express");
const path = require("node:path");
const homeRouter = require("./routes/HomeRouter");
const formRouter = require("./routes/formRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/new", formRouter)
app.use("/", homeRouter)


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3030;

app.listen(PORT, (error) => {
    if(error) throw error;
    console.log(`Connection successful and listening at: ${PORT}`);
})


app.get((error, req, res, next) => {
    if(error) throw error;
})

