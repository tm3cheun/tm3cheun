'use strict';

angular.module('myApp.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', function($scope) {

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
