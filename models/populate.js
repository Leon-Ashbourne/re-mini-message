// #! /usr/bin/env node

const { Client } = require("pg");
const process = require("node:process");
const dotenv = require("dotenv");

dotenv.config();

const currentDate = new Date();
const date = currentDate.getDate() + "/" 
            + currentDate.getMonth()+1 + "/" 
            + currentDate.getFullYear() 
            // + currentDate.getHours() + ":" 
            // + currentDate.getMinutes();

const SQL = `
    CREATE TABLE IF NOT EXISTS user_messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(255),
        text TEXT,
        add VARCHAR(255)
    );
 
    INSERT INTO user_messages (username, text, add)
    VALUES ('Amon', 'this is one message', ${date}),
    ('Charlie', 'this is one of a kind', ${date});

`

async function main() {
    console.log("populating....");
    const client = new Client({
        connectionString: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
    })

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("done...");
}

main();

