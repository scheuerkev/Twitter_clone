const router = require('express').Router();
const tweets = require('./tweets.js')

router.use('/tweets', tweets);

module.exports = router;