'use strict';

angular.module('myApp.project', ['ngRoute'])

.controller('projectCtrl', ['$scope', '$location', '$http', '$routeParams', function($scope, $location, $http, $routeParams) {
	$scope.project = [];

	$scope.init = function() {
		$http.get('projects/projects.json').then(function(data) {
			var projects = data.data;
			$scope.project = projects[$routeParams.projectId];
		});
	}
	$scope.init();
}]);
