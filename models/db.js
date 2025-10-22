const messages = [
    {
        text: "Hi there, this is one of a message",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hi there, this is another message",
        user: "Charles",
        added: new Date()
    }
]

async function getAllMessages() {
    return messages;
}

async function addMessageToDb(message) {
    messages.push(message);
}

async function getMessageByName(name) {
    return messages.find((msg) => msg.user = name);
}


module.exports = { getAllMessages, getMessageByName, addMessageToDb };

