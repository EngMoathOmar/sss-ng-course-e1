'use strict';
var port = 80;
// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('./'));
app.get('/', function(req, res) {
    res.sendfile('./index.html');
});

app.listen(port);
console.log("start Listening at port: %d",port);
