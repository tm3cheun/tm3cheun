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

	$scope.initAnimateScroll = function () {
		var offset = 50;

    $(function ($) {
	    // wait till load event fires so all resources are available
	    $scope.$section = $('a.scroll').click(function(e) {
      	var hash = e.target.hash.split("#");
      	hash = hash[hash.length-1];

      	var obj = $("#" + hash);

      	if (obj.offset()) {
			    $('html, body').animate({
			        scrollTop: obj.offset().top - offset
			    }, 750);
	          
          return false;
			  }
			});
    });
  };

  $(document).ready(function () {
  	$scope.initAnimateScroll();
  });
}]);
