var express = require('express');
var app = express();

app.user(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);
