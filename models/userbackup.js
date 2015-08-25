// var mongoose = require('mongoose');

// var user = new mongoose.Schema({
// 	fullName    : String,
// 	emailAdd    : {type: String , unique : true},
// 	password    : String,
// 	phoneNumber : String,
// 	updatedOn   : {type : Date, default : Date.now}
// });

// module.exports = mongoose.model('User', user);


/* GET /users listing. */
// route.get('/', function(req, res, next) {
// 	User.find(function(err, users) {
// 		if (err) return next(err);
// 		res.json(users);
// 	});
// });