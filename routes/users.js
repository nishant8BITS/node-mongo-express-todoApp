var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  }); 
});

// Create and Save User 
router.post('/create', function(req, res, next){
	User.create(req.body, function(err, user){
		if(err){
			if(err.code == 110000){
				console.log("Entered Email Already Exist");
				res.json({err: "Entered Email Already Exist"});
			}else{
				res.json({err: "Some Error occur at server"});
			}
		}else{
			res.json({success : "User Created Successfully", 
					  userId : user._id});
		}
	})
});

module.exports = router;