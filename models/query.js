const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM user_messages");

    return rows;
}

async function addMessage({text, username, add}) {
    await pool.query("INSERT INTO user_messages (text, username, add) VALUES ($1, $2, $3)", [text, username, add]);
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM user_messages WHERE id=$1", [id]);
}

async function updateMessage(id, {text, username, add}) {
    await pool.query("UPDATE user_messages SET text=$1, user=$2, add=$3 WHERE id=$4", [text, username, add, id]);
} 


module.exports = {
    getMessages, 
    addMessage,
    deleteMessage,
    updateMessage
}

