"use strict";

var app = angular.module("Bugz", ["ngRoute", "base64", "nvd3", "nvd3ChartDirectives"])
    .constant('apiUrl', "http://localhost:8000");

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
        if (userExists){
            resolve();
        }else {
            reject();
        }
    });
});

app.config(function($routeProvider){
    $routeProvider.
    when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    }).
    when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    }).
    when("/register", {
        templateUrl: "partials/register.html",
        controller: "RegisterCtrl"
    }).
    when("/news", {
        templateUrl: "partials/news.html",
        controller: "NewsCtrl"
    }).
    when("/graph", {
        templateUrl: "partials/graph.html",
        controller: "GraphCtrl"
    }).
    when("/success", {
        templateUrl: "partials/success.html",
        controller: "SuccessCtrl"
    }).
    when("/count", {
        templateUrl: "partials/count.html",
        controller: "CountCtrl"
    }).
    otherwise("/");
});

// angular.module('Bugz').factory('RootFactory', [
//   "$http",
//   "apiUrl",
//   ($http, apiUrl) => {
//     let secure_token = null;

//     return {
//       getApiRoot () {
//         return $http({
//           url: apiUrl,
//           headers: {
//             'Authorization': "Token " + secure_token
//           }
//         }).then(res => res.data)
//       },
//       setToken (token) {
//         secure_token = token
//       },
//       getToken () {
//         return secure_token;
//       }
//     }
//   }
// ]);