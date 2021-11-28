const mongoose = require('mongoose');
const env = require(`../env/${process.env.NODE_ENV}`);

mongoose.connect(env.dbUrl)
    .then(() => {
        console.log("Connection to DB ok");
    })
    .catch((err)=> {
        console.log('Unable to connect to DB: ', err);
    } )




