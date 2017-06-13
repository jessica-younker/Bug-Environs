"use strict";

app.factory("ObservationFactory", ($q, $http) => {
//Convert observation form data to JSON
    let saveObservation = (user) => {
        return $q((resolve, reject) => {
            $http.post(`${FBCreds.databaseURL}/cards.json`)
            .then((cardObject) => {
                let cards = [];
                let cardCollection = $templateCacherdObject.data;
                Object.keys(cardCollection).forEach((key) => {
                    cardCollection[key].id = key;
                    cards.push(cardCollection[key]);
                });
                resolve(cards);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    // getObservat

return {saveObservation};

});