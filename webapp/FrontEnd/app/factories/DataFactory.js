"use strict";

app.factory("DataFactory", function($http, $base64, $httpParamSerializer){
    //add BugCreds to dependencies if end up needing auth stuff

    function getBugData() {
        return new Promise((resolve, reject)=>{
            console.log('calling all bugs');
            $.ajax({
                url: "http://www.inaturalist.org/observations.json",
                method: "GET",
            }).done((bugData)=>{
                console.log('bugData received:', bugData);
                resolve(bugData);
                let bugArray = [];
                let bugObject = {};

                bugData.forEach((bug)=> {

                    bugObject = {
                        insect_name: bug.species_guess,
                        population: 1,
                        latitude: bug.latitude,
                        longitude: bug.longitude,
                        time: bug.time_observed_at_utc,
                        date: bug.updated_at, 
                    };
                bugArray.push(bugObject);
                });
                console.log('parsedbugz', bugArray);
                resolve(bugArray);

            }).fail((error)=>reject(error));
        });
    }
    return {getBugData};   
});