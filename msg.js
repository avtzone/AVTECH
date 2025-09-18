// msg.js

// Import downloadMediaMessage from baileys (baileys-pro aliased as "baileys")
const { downloadMediaMessage } = require('baileys');

// Dummy sms function (replace with real SMS API if needed)
async function sms(number, message) {
    console.log(`SMS sent to ${number}: ${message}`);
    return true;
}

module.exports = { sms, downloadMediaMessage };
