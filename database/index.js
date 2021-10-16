const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alex:qwe@cluster0.kqjyd.mongodb.net/twitter?retryWrites=true&w=majority')
.then(() => console.log("Database connection OK"))
.catch((err) => {
    console.log("Database connection failed", {err})
})