var express = require('express');
var app = express();

app.use(express.static('static/'));
// app.set('engine', 'mustache');

app.listen(3000, function() {
    console.log('Listening port 3000');
});
