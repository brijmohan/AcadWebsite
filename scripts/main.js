/**
 * Created by brij on 19/12/14.
 */
"use strict";
// create the module and name it myApp
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/projects', {
            templateUrl : 'partials/projects.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/research', {
            templateUrl : 'partials/research.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});