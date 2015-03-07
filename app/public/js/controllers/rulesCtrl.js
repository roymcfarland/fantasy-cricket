var rulesCtrl = angular.module("rulesCtrl", []);

rulesCtrl.controller("rulesController", function($location, $scope, $http) {

	this.testMessage = "Rules of CricketDuel"

	// GET request for rules.json from server
	$http.get("/api/rules")
	.success(function(response) {
		$scope.gameRules = response;
	})
	.error(function(error) {
		alert("Sorry - there was an error. Try again.");
		$location.path("/");
	});
	
});