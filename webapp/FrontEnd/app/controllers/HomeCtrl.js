"use strict";

app.controller("HomeCtrl", function($scope, $location){
    
 // let user = AuthFactory.getUser();
     
    $scope.observation = {
        insect: "",
        street: "",
        state: "",
        zip: "",
        latitude: "",
        longitude: "",
        date: "",
        time: "",
        count: "",
        // user: 
     };

    console.log("emptyob", $scope.observation)
    
    var newData;
    $scope.saveObservation = function(){
        console.log("hello from func")
        newData = $scope.observation
        console.log("newData", newData)
        $location.url("/success");
    };
});