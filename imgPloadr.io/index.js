var express = require('express');
var app = express();

var route = require('./route.js');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: ture}));
app.use(dobyParser.json());
app.use(methodOverride());
app.use(cookieParser('some-scret-value-here'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');  

app.use('/', route);

app.listen(app.get('port'), function() {
  console.log('Server up : http://localhost: ' + app.get('port'));
})