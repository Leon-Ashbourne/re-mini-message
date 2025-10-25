const { Pool } = require("pg");
const process = require("node:process");
const dotenv = require("dotenv")

dotenv.config();


module.exports = new Pool({
    host: "localhost",
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})


