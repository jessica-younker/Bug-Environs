"use strict";

//Gets my insect data from API

app.factory("ObservationFactory", function($http, $base64, $httpParamSerializer){
    function getObservations() {
        return new Promise((resolve, reject)=>{
            $.ajax({
                url: "http://localhost:8000/observation",            
                method: "GET"
            }).done((bugData)=>{

            }).fail((error)=>reject(error));
        });
    }
    return {getObservations};   
});