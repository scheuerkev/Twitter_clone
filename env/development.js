const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://alex:qwe@cluster0.kqjyd.mongodb.net/twitter?retryWrites=true',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key'),
    sessionSecret: 'zajilejk9804JKljskc90',
    portHTTP: 3000,
    portHTTPS: 3001,
    sparkPostKey : 'd6366059a0b2071f22c3a261efd5a584ad31c5fe'
}