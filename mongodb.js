/* mongodb+srv://wanja:wanja@cluster0-t8c4x.mongodb.net/test?retryWrites=true&w=majority  */
/* mongodb+srv://wanja:wanja@cluster0-t8c4x.mongodb.net/test?retryWrites=true&w=majority */

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://wanja:wanja@cluster0-t8c4x.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));