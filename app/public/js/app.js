////////////////////////////////////////////////////////////////
///////////////////////// PARSE DB /////////////////////////////
////////////////////////////////////////////////////////////////

// Parse DB initialization call (Application ID, JavaScript key)
Parse.initialize("GeuNrmGKg5XYigjeBfB9w9mQWqp4WFWHDYqQPIzD", "tiAbB7WfaIdHr4RKfdDQ7FeeYBjDysL6lRI8oHzw");
	// Parse Test Script
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	// testObject.save({foo: "bar"}).then(function(object) {
	//   alert("yay! it worked");
	// });

////////////////////////////////////////////////////////////////
///////////////////////// ng-app ///////////////////////////////
////////////////////////////////////////////////////////////////

// ng-app="cricketDuel"
var cricketDuel = angular.module("cricketDuel", [
	"appRouter",
	"loginCtrl"
]);

/////////////////////////////////////////////////////////////////
////////////////////// ng-controllers ///////////////////////////
/////////////////////////////////////////////////////////////////

/*
// mainController for the ENTIRE site
cricketDuel.controller("mainController", function() {
	// Bind view-model
	var vm = this;
});
*/


cricketDuel.controller("indexController", function() {
	// Bind view-model
	var vm = this;
	vm.topMessage = "Welcome to CricketDuel!";
});

cricketDuel.controller("registerController", function() {
	// Bind view-model
	var vm = this;
	vm.testMessage = "Join a league by registering using the form below!"
});

cricketDuel.controller("logoutController", function() {
	// Bind view-model
	var vm = this;
	vm.testMessage = "You have been logged out. Please login again!";
});

cricketDuel.controller("dashboardController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! You are now logged in.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "Welcome, {{ Parse.User.username }}! This is your dashboard.";
});

cricketDuel.controller("leaderboardController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! This is the leaderboard.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "This is the leaderboard.";
});

cricketDuel.controller("myTeamController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! This is your team dashboard.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "This is your team dashboard.";
});

cricketDuel.controller("tradesController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! This is your trades page.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "These are your pending player trades.";
});

cricketDuel.controller("rulesController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! These are the league rules.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "These are the league rules.";
});

cricketDuel.controller("legalTermsController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! These are the legal terms of use.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "These are the legal terms of use.";
});

cricketDuel.controller("contactInfoController", function() {
	// Bind view-model
	var vm = this;
	/* 
	ACTIVATE AFTER PARSE DB IS OPERATIONAL
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Insert logic
		// vm.smallMessage = "Welcome " + {{ User.username }} + "! This is the contact page.";
	} else {
		// Insert logic
		alert("Please login again. Error: " + error.code + " " + error.message);
		Parse.User.logOut();
		window.location.assign("/login");
	}
	*/
	vm.testMessage = "This is the contact page.";
});
