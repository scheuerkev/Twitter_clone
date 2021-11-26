const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alex:qwe@cluster0.kqjyd.mongodb.net/twitter?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connection to DB ok");
    })
    .catch((err)=> {
        console.log('Unable to connect to DB: ', err);
    } )




