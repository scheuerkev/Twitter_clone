const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [140, 'Your tweet is too long'],
        minlength: [1, "Your tweet is too short"],
        required: [true, "Required field"],
    }
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;