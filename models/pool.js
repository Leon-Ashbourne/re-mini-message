const { Pool } = require("pg");
const process = require("node:process");
const dotenv = require("dotenv")

dotenv.config();

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "production") {

    module.exports = new Pool({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    })


}else {

    module.exports = new Pool({
        host: "localhost",
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT
    })
}

