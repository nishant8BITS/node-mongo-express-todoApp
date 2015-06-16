// Bring mongoose into the project
var mongoose = require('mongoose');

// Build the connection string
var dbURI = 'mongodb://localhost/todoApp';

// Create the database connection 
mongoose.connect(dbURI);

// Event Handler for when mongo connected 
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});

// Event Handler for when mongo connection got some error
mongoose.connection.on('error', function(err){
	console.log("Mongoose connection error " + err);
})

// Event Handler for when mongo got disconneted
mongoose.connection.on('disconneted', function(){
	console.log('Mongoose got disconneted');
})

// When Node process is ending then closing the mongo connection
process.on('SIGINT' , function(){
	mongoose.connection.close(function(){
		console.log('We have close the mongo connection when app terminated');
		process.exit();
	});
});