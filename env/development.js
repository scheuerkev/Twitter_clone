const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://alex:qwe@cluster0.kqjyd.mongodb.net/twitter?retryWrites=true&w=majority',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key'),
    sessionSecret: 'zajilejk9804JKljskc90',
    portHTTP: 3000,
    portHTTPS: 3001
}