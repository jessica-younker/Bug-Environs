"use strict";

app.controller("HomeCtrl", function($scope, $http, $location, RootFactory, DataFactory){
    
 // let user = AuthFactory.getUser();
    
    $scope.observation = {
        insect_name: "",
        latitude: "",
        longitude: "",
        date: "",
        time: "",
        population: "",
        // user: 
     };

    $scope.saveObservation = function(){
        $http({
            url: `${RootFactory.getApiRoot()}/observation/`,
            method: "POST",
            headers: {
              'Authorization': "Token " + RootFactory.getToken(),
            },
            data: $scope.observation

        }).then(
            res => $scope.observation = res.data.results,
            console.log
        )   
        // $location.url("/success");
    };

     DataFactory.getBugData()
        .then(function(bugArray){
            bugArray.forEach((bug)=> {
                $scope.observation = bug;
                $scope.saveObservation();
            })           
    });
                   
});

