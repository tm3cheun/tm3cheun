'use strict';

angular.module('myApp.projects', ['ngRoute'])

.controller('projectsCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
	$scope.projects = [];

	$scope.init = function() {
		$http.get('projects/projects.json').then(function(data) {
			$scope.projects = data.data;
		});
	}
	
	$scope.init();
}]);
