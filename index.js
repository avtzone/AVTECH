const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let code = require('./pair'); // Assuming './pair' contains the router for the pairing logic

require('events').EventEmitter.defaultMaxListeners = 500;

// 1. ✅ Body Parsers MUST come BEFORE any route that uses POST/Form data.
// This is essential for handling the phone number submission from the pair.html form.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 2. Set up the static routes for HTML files first.
// The main page
app.use('/', (req, res, next) => {
    res.sendFile(__path + '/main.html');
});

// The pairing page (the GET request to show the form)
app.use('/pair', (req, res, next) => {
    res.sendFile(__path + '/pair.html');
});

// 3. Set up the Code/Router handler LAST.
// This router is likely where the POST request from pair.html is handled 
// and where the pairing code generation/link process occurs.
app.use('/code', code); 

// Note: If you are getting a 404 when submitting the form in pair.html, 
// check the 'action' attribute of the HTML form. It should be pointing to /code 
// if you want this specific router to handle it.

app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star ‼️

𝗖𝗬𝗕𝗘𝗥 𝗔𝗡𝗨𝗪𝗛 𝗠𝗗 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧

Server running on http://localhost:` + PORT)
});

module.exports = app;
