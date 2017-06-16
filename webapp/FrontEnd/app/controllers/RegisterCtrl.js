"use strict";

app.controller("RegisterCtrl", function($scope, $location, $http, Bugz){

        $scope.user = {};

        $scope.register = function() {
            $http({
                url: `${Bugz}/register/`,
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
                "username": $scope.user.username,
                "password": $scope.user.password,
                "email": $scope.user.email,
                "first_name": $scope.user.first_name,
                "last_name": $scope.user.last_name
            }
        }).then(
            res => {
                RootFactory.setToken(res.data.token);
                if (res.data.token !== "") {
                $location.path('/register');
                }
            },
            console.error
        );
        };

}); 