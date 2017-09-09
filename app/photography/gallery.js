'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.controller('galleryCtrl', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {
	$scope.gallery = {};
	$scope.galleries = []
	$scope.pageNumber = 0;
	$scope.totalPages = 0;
	$scope.images = [];

	$scope.init = function() {
		$http.get('photography/galleries.json').then(function(data) {
			var galleries = data.data;
			$scope.gallery = galleries[$routeParams.galleryId];
			$scope.images = $scope.gallery.images;
			$scope.totalPages = $scope.gallery.images.length;
		});
	}

	$scope.goToNextPage = function() {
		if ( $scope.pageNumber < $scope.totalPages - 1 ) $scope.pageNumber++;
	}

	$scope.goToPreviousPage = function() {
  	if ( $scope.pageNumber > 0 ) $scope.pageNumber--;
	}

	$scope.goToImageNumber = function ( newPage ) {
		$scope.pageNumber = newPage;
	}

	$scope.exit = function () {
		$location.path( "/photography" );
	}

	$(function ($) {
		// wait till load event fires so all resources are available
		$("body").keydown(function(e) {
			$scope.$apply(function() {
			  if(e.keyCode == 37) { // left
			    $scope.goToPreviousPage();
			  }
			  else if(e.keyCode == 39) { // right
			    $scope.goToNextPage();
			  }
			  else if(e.keyCode == 27) { // esc
			    $scope.exit();
			  }
			});
		});
	});

	$scope.init();

}]);