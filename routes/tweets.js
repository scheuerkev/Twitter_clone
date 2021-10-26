const router = require('express').Router();
const Tweet = require('../database/models/tweet')
const {tweetList, tweetNew, tweetCreate, tweetDelete} = require("../controllers/tweets");

router.get('/', tweetList);
router.get('/new', tweetNew);
router.post('/', tweetCreate);
router.delete('/:tweetId', tweetDelete)
module.exports = router;