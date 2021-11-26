const session = require('express-session');
const MongoStore = require('connect-mongo');
const { app } = require('../app');

app.use(
    session({
        secret: 'zajilejk9804JKljskc90',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            maxAge: 1000 * 60 * 60 * 24 * 14,
        },
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://alex:qwe@cluster0.kqjyd.mongodb.net/twitter?retryWrites=true&w=majority',
            ttl: 60 * 60 * 24 * 14,
        }),
    })
);