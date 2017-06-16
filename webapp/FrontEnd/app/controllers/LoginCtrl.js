"use strict";

app.controller("LoginCtrl", function($scope, $location, $http, RootFactory){

		$scope.user = {};

		$scope.login = function() {
			$http({
				url: `${RootFactory.getApiRoot()}/api-token-auth/`,
				method: "POST",
				data: {
				  "username": $scope.user.username,
				  "password": $scope.user.password
				}
			}).then(
				res => {
					RootFactory.setToken(res.data.token);
					if (res.data.token !== "") {
					$location.path('/login');
					}
				},
				console.error
			);
		};
}); 