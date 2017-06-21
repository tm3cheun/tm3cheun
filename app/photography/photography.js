'use strict';

angular.module('myApp.photography', ['ngRoute'])

.controller('photographyCtrl', ['$scope', function($scope) {

	$scope.pageNumber = 0;
	$scope.totalPages = 8;
	$scope.gallery = [];

	$scope.init = function() {
		var index, image;

		for ( index = 1; index <= $scope.totalPages; index++ ) {
			image = 'photography/images/0' + index + '.png';
			$scope.gallery.push( { index: index, image: image } );
		}
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
			});
		});
  });

  $scope.init();
  
}]);