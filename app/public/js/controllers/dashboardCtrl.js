var dashboardCtrl = angular.module("dashboardCtrl", []);

dashboardCtrl.controller("dashboardController", function($location, $scope, $http) {
	
	var vm = this;
	vm.user = Parse.User.current();
	var user = Parse.User.current();
	// console.log($scope);

	/////////////////////////////////
	////// USER AUTHENTICATION //////
	/////////////////////////////////
	
	vm.user = Parse.User.current();
	if(!vm.user) return $location.path("/");



	/////////////////////////////////
	/// ACQUIRE CURRENT USER INFO ///
	/////////////////////////////////
	vm.username = vm.user.getUsername();
	// console.log("vm.user: ", vm.user);
	vm.userId = vm.user.id;
	vm.userMoney = vm.user.attributes.Money;
	// console.log("vm.userMoney: ", vm.userMoney);



	/////////////////////////////////
	/////////// AJAX GET ////////////
	/////////////////////////////////
	/*
	$http.get("/api/leagues/:userId")
	.success(function(response) {
		$scope.userLeagues = response;
	})
	.error(function(error) {
		alert("Sorry - there was an error.Try again.");
		$location.path("/dashboard");
	});
	*/

	var userId = user.id;
	console.log("userId:", userId);

	var sessionToken = user._sessionToken;
	console.log("sessionToken:", sessionToken);

	$http.get("/api/v1/userLeagues?leagueId=" + "&userId=" + userId + "&sessionToken=" + sessionToken, {}, [])
		.success(function(response, status) {
			$scope.userLeagues = response;
			$scope.status = status;
			if (status == 200) {
				console.log("$scope.status:", $scope.status);
				console.log("$scope.userLeagues:", $scope.userLeagues);
			}
		})
		.error(function(data, status) {
			$scope.data = data;
			$scope.status = status;
		})




	/////////////////////////////////
	///////////// ASIDE /////////////
	/////////////////////////////////
	$scope.aside = {
		"title": "Easter Egg",
		"content": "Testing Angular Strap!"
	};

});