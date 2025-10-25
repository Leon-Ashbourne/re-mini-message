const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM user_messages");

    return rows;
}

async function addMessage({text, user, add}) {
    await pool.query("INSERT INTO user_messages (text, user, add) VALUES ($1, $2, $3)", [text, user, add]);
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM user_messages WHERE id=$1", [id]);
}

async function updateMessage(id, {text, user, add}) {
    await pool.query("UPDATE user_messages SET text=$1, user=$2, add=$3 WHERE id=$4", [text, user, add, id]);
} 


module.exports = {
    getMessages, 
    addMessage,
    deleteMessage,
    updateMessage
}

