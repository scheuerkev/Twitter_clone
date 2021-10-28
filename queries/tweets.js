const Tweet = require("../database/models/tweet");

exports.getTweets = () => {
    return Tweet.find({}).exec();
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}

exports.deleteTweet = (tweetId) => {
    return Tweet.findOneAndDelete({_id: tweetId}).exec();
}

exports.getTweet = (tweetId) => {
    return Tweet.findOne({_id: tweetId}).exec();
}

exports.updateTweet = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, {$set: tweet}, {runValidators: true}).exec();
}