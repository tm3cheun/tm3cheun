'use strict';

angular.module('myApp.photography', ['ngRoute'])

.controller('photographyCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
	$scope.galleries = [];

	$scope.init = function() {
		$http.get('photography/galleries.json').then(function(data) {
			$scope.galleries = data.data
		});
	}

	$scope.goToGallery = function(id) {
		$location.path( "/photography/" + id );
	}
	
	$scope.init();
  
}]);