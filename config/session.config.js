const app = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const env = require(`../env/${process.env.NODE_ENV}`);


app.use(
    session({
        secret: env.sessionSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            maxAge: 1000 * 60 * 60 * 24 * 14,
        },
        store: MongoStore.create({
            mongoUrl: env.dbUrl,
            ttl: 60 * 60 * 24 * 14,
        }),
    })
);