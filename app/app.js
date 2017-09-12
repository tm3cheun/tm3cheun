'use strict';

// Declare app level module which depends on views, and components

var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.photography',
  'myApp.gallery',
  'myApp.projects',
  'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl : 'home/home.html',
      controller : 'HomeCtrl'
    })
    .when('/photography', {
      templateUrl: 'photography/photography.html',
      controller: 'photographyCtrl'
    })
    .when('/photography/:galleryId', {
      templateUrl: 'photography/gallery.html',
      controller: 'galleryCtrl'
    })
    .when('/projects', {
      templateUrl: 'projects/projects.html',
      controller: 'projectsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

app.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}]);