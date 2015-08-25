'use strict';

var express = require('express'),
	route = express.Router(),
	User = require('../models/User');

/*
   Create User and Saved to Firebase
 */
route.post('/createUser', function(req, res, next) {
	//console.log("Nishant");
	//res.json({error: "Some Error Occur"});

	if(!!req.body && 'username' in req.body && 'password' in req.body){
		var userCreated = User.createUser(req.body.username, req.body.password);
		res.json({userInfo : userCreated});
	}else{
		res.json({
			Error : "username and password parameter is required"
		})
	}
});

/*
   Authorize User credential using Firebase
 */
route.post('/authuser', function(req, res, next) {
	if(!!req.body && 'username' in req.body && 'password' in req.body){
		var userAuthData = User.authUser(req.body.username, req.body.password);
		res.json(userAuthData);
	}else{
		res.json({
			Error : "Invalid username and password parameter"
		})
	}
});


/*
  Export route instance to module
 */
module.exports = route;