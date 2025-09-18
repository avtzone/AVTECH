// msg.js

const { downloadMediaMessage } = require('@whiskeysockets/baileys');

// Dummy sms function
async function sms(number, message) {
    console.log(`SMS sent to ${number}: ${message}`);
    return true;
}

module.exports = { sms, downloadMediaMessage };
