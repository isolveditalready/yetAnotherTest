const express = require('express')
const app = express()
const port = 3009

const crypto = require('crypto');


let user = require('./userDb')

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});

app.get('/',(req,res) => {
    res.send("hello get")
});

app.get('/newUser', (req,res) => {
    let username = req.query.username || '';
    let password = req.query.password || '';

    username = username.replace(/[!@#$%^&*]/g,'');
    if (!username || !password || user[username]) {
        return res.sendStatus(400);
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000,512,'sha512');

    user[username] = { salt, hash };

    res.sendStatus(200);

});

app.get('/auth', (req,res) => {

    let username = req.query.username || '';
    const password = req.query.password || '';

    username = username.replace(/[!@#$%^&*]/g,'');
    if (!username || !password || !user[username]) {
        return res.sendStatus(400);
    }

    const { salt,hash } = user[username];
    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000,512,'sha512');

    if ( crypto.timingSafeEqual(hash, encrpytHash)) {
        console.log("yes");
        res.sendStatus(200);
    } else {
        console.log("yesr2");
        res.sendStatus(401);
    }
});