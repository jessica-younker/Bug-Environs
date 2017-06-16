"use strict";

app.controller("HomeCtrl", function($scope, $http, $location, RootFactory, DataFactory){
    
 // let user = AuthFactory.getUser();
    DataFactory.getBugData()
    console.log("being called in home");
 



 // CardFactory.getCards(user)
 //    .then(function(cardCollection){
 //        $scope.cards = cardCollection;
 //    });

    $scope.observation = {
        insect_name: "",
        street: "",
        state: "",
        zip_code: "",
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
            console.log("error")
        )   
        // $location.url("/success");
    };

        
});

