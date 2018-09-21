var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
app.use(express.static('./public'));
app.listen(3000);