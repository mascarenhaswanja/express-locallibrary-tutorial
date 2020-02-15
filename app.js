var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var catalog = require('./routes/catalog');  //Import routes for "catalog" area of site


// Set up mongoose connection
//var dev_db_url = 'mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true'
var dev_db_url = 'mongodb+srv://wanja:wanja@cluster0-t8c4x.mongodb.net/test?retryWrites=true&w=majority'
var mongoDB = process.env.MONGODB_URI || dev_db_url;

var mongoose = require('mongoose');
mongoose.connect (mongoDB, {userNewUrlParser: true});

var db = mongoose.connection;
db.on ('error', console.error.bind(console, 'MongoDb connection error'));

var app = express();


var helmet = require('helmet');

// Create the Express application object
var app = express();

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* app.use('/', routes);
app.use('/users', users); */
app.use('/', routes);
app.use('/users', users);
app.use('/catalog', catalog);  // Add catalog routes to middleware chain./*

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
