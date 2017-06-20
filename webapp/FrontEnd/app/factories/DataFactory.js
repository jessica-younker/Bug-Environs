"use strict";

app.factory("DataFactory", function($http, $base64, $httpParamSerializer){
    //add BugCreds to dependencies if end up needing auth stuff

    function getBugData() {
        return new Promise((resolve, reject)=>{
            $.ajax({
                url: "http://www.inaturalist.org/observations.json?q=hornworm&iconic_taxa[]=Insecta&page=2&per_page=200",                
                method: "GET"
            }).done((bugData)=>{
                console.log('bugData received:', bugData);
                let bugArray = [];
                let bugObject = {};

                bugData.forEach((bug)=> {
                    var api_time = bug.time_observed_at_utc || bug.created_at_utc;
                    var sliced_date = api_time.slice(0,10);
                    var sliced_time = api_time.slice(11,19);
                    bugObject = {
                        insect_name: bug.species_guess,
                        population: 100,
                        latitude: bug.latitude,
                        longitude: bug.longitude,
                        time: sliced_time,
                        date: sliced_date 
                    };
                    if (bugObject.insect_name !== null) {
                        bugArray.push(bugObject);
                    }
                });
                console.log('parsedbugz', bugArray);
                resolve(bugArray);

            }).fail((error)=>reject(error));
        });
    }
    return {getBugData};   
});