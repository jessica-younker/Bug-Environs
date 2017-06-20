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

    
    $scope.insect_names = ["Aphid", "Asian Lady Beetle", "Assassin Bug", "Bee", 
    "Cabbage White", "Convolvulus Hornworm", "Cucumber Beetle", "Flea Beetle", 
    "Katydid",  "Marmorated Stink Bug", "Squash Bug", "Wasp"];

    $(document).ready(function(){
        $.fn.datepicker.defaults.format = "yyyy-mm-dd";
        $.fn.datepicker.defaults.autoclose = "true";
        $('.datepicker').datepicker
    });

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
        $location.url("/success");
    };

    // Comment in to add more Bug Info from iNaturalist.org
    // DataFactory.getBugData()
    //     .then(function(bugArray){
    //         bugArray.forEach((bug)=> {
    //             $scope.observation = bug;
    //             $scope.saveObservation();
    //         })           
    // });
                   
});

