'use strict';

var Firebase = require('firebase'),
	dataRef = new Firebase('https://flickering-inferno-4958.firebaseio.com/');


var User = {

	createUser: function(username, password) {
		dataRef.createUser({
			email: username,
			password: password
		}, function(error, userData) {
			if (error) {
				switch (error.code) {
					case "EMAIL_TAKEN":
						console.log("The new user account cannot be created because the email is already in use.");
						break;
					case "INVALID_EMAIL":
						console.log("The specified email is not a valid email.");
						break;
					default:
						console.log("Error creating user:", error);
				}
				return error;
			} else {
				console.log("Successfully created user account with uid:", userData.uid);
				return userData.uid;
			}
		});
	},

	authUser: function(username, password) {
		dataRef.authWithPassword({
			"email": username,
			"password": password
		}, function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
				return error;
			} else {
				console.log("Authenticated successfully with payload:", authData);
				return authData;
			}
		});
	}
};

module.exports = User;