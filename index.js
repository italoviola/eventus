const express = require('express');
const site = express();

site.use(express.static('static/'));

site.listen(3000, function() {
    console.log('Listening port 3000');
});
