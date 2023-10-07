const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
const secret = 'hgasdiuj763ehj2h';

// set credentials to true to allow cookie
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// parse json from request
app.use(express.json());

mongoose.connect('mongodb+srv://blog:2DbHT4PqEEk9LAMZ@cluster0.bzlq4js.mongodb.net/');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // only unique username is allowed. Hence try and catch
    try {
        // hashed password
        const userDoc = await User.create({ username, password: bcrypt.hashSync(password, salt), });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});

app.listen(4000)
//
// blog