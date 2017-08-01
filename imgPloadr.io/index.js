var express = require('express');
var config = require('./server/configure');
var app = express();
var mongoose = require('mongoose');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');  
app = config(app);

mongoose.connection.openUri('mongodb://localhost/imgOverflow');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

app.listen(app.get('port'), function() {
  console.log('Server up : http://localhost: ' + app.get('port'));
})