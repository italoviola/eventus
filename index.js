const express = require('express');
const site = express();
const Mustache = require("mustache");
const request = require("./static/js/request.js")

site.use(express.static('static/'));
// site.set('engine', 'mustache');

site.listen(3000, function() {
    console.log('Listening port 3000');
});

site.get('/request', function(req, res) {
    res.send(request);
});
