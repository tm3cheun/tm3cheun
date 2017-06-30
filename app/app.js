'use strict';

// Declare app level module which depends on views, and components

var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.photography',
  'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
        templateUrl : 'home/home.html',
        controller : 'HomeCtrl'
    })
    .when('/photography', {
    templateUrl: 'photography/photography.html',
    controller: 'photographyCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);

app.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}]);