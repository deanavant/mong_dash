var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
// static content
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

// mongoose.Promise = global.Promise;
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});