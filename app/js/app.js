"use strict";

// set up main module to use myApp.controllers
angular.module("myApp", ["myApp.controllers"]);

// set up root scope of webapp
angular.module("myApp").run(function($rootScope) {
    $rootScope.title = "AngularJS Template";
    $rootScope.name = "Root Scope";
});
