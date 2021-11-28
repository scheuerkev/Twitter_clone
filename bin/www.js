const app = require('../app');
const fs = require('fs');
const https = require('https');
const http = require('http');
const env = require(`../env/${process.env.NODE_ENV}`);

const httpServer = http.createServer((req, res) => {
    res.writeHead(301, {Location: `https://${req.headers.hostname}${req.url}`});
}).listen(80)

const httpsServer = https.createServer({
    key: fs.readFileSync(env.key),
    cert: fs.readFileSync(env.cert),
}, app).listen(443);