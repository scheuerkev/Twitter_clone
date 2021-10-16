const router = require('express').Router();
const api = require('./api');
const Tweet = require('../database/models/tweet')

router.use('/api', api);

router.get('/tweet/new', (req, res) => {
    res.render('tweets/tweet-form');
})

router.get('/', (req, res) => {
    Tweet.find({}).exec()
        .then(tweets => res.render('tweets/tweet-list', {tweets}))
        .catch(err => console.log({err}))
})

module.exports = router;
