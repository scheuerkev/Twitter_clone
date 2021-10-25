const router = require('express').Router();
const Tweet = require('../database/models/tweet')
const {tweetList, tweetNew, tweetCreate} = require("../controllers/tweets");

router.get('/', tweetList);
router.get('/tweet/new', tweetNew);
router.post('/', tweetCreate);

module.exports = router;