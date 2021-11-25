const mongoose = require('mongoose');

exports.clientPromise = mongoose
    .connect(
        'mongodb+srv://alex:qwe@cluster0.kqjyd.mongodb.net/twitter?retryWrites=true',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Ok'))
    .catch((err) => console.log(err));



