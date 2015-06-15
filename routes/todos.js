var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  }); 
});

router.post('/', function(req, res, next){
	console.log(req.body.name);
	Todo.create(req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});


// Check Connection 
var request = require('request');

request.post(
    'http://localhost:3001/todos',
{ form: { name: 'Nishant', completed :true , note: "Some Text" } },
function (error, response, body) {
    if (!error && response.statusCode == 200) {
       // console.log(body)
    }
 });


module.exports = router;