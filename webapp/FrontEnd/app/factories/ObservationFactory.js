"use strict";

//Gets insect data from API

app.factory("ObservationFactory", function(){
    
    function getObservations() {
        return new Promise((resolve, reject)=>{
            $.ajax({
                url: "http://localhost:8000/observation",            
                method: "GET"
            }).done((bugData)=>{
                resolve(bugData)

            }).fail((error)=>reject(error));
        });
    }
    return {getObservations};   
});