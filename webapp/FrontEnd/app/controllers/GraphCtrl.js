"use strict";

app.controller("GraphCtrl", function($scope, $http, ObservationFactory, RootFactory){

    // get data from igotbuz api
    let bugArray = [];
    let graphBugs = {};
    
    ObservationFactory.getObservations()
        .then(function(bugData){
            console.log(bugData);

            bugData.forEach((bug)=> {
                graphBugs = {
                    key: bug.insect_name,
                    // color: "#0000ff",
                    values: [
                        {x: bug.population, y: bug.date}
                    ]
                }
                bugArray.push(graphBugs);
            });
            console.log("graphbugz", bugArray);
            
            nv.addGraph(function() {
                var chart = nv.models.cumulativeLineChart()
                    .x(function(d) { return d[0] })
                    //adjusting, 100% is 1.00, not 100 as it is in the data
                    .y(function(d) { return d[1] / 100 })
                    .color(d3.scale.category10().range())
                    .useInteractiveGuideline(true);

                chart.xAxis
                    .tickFormat(function(d) {
                      return d3.time.format('%x')(new Date(d))
                    });

                chart.yAxis.tickFormat(d3.format('1'));

                d3.select('#chart svg')
                    .datum(bugArray)
                    .transition().duration(500)
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });  

        }); 

    

});
   

