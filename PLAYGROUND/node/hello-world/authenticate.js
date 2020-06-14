const express = require('express')
const app = express()
const port = 3009

const crypto = require('crypto');


let users = require('./userDb')

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
    if (!username || !password || users[username]) {
        return res.sendStatus(400);
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000,512,'sha512');

    users[username] = { salt, hash };

    res.sendStatus(200);

});

app.get('/auth', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
  
    username = username.replace(/[!@#$%^&*]/g, '');
  
    if (!username || !password || !users[username]) {
        console.log("one");
      return res.sendStatus(400);
    }
  
    const { salt, hash } = users[username];
    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');
  console.log("shit");
    if (crypto.timingSafeEqual(hash, encryptHash)) {
        console.log("one1");
      res.sendStatus(200);
    } else {
        console.log("one2");
      res.sendStatus(401);
    }
  });