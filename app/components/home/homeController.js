(function (){

	'use strict';

	angular.module('babyApp.homeController', ['babyApp.homeFactory'])

	.controller('homeCtrl',['$scope','homeFactory', function($scope, homeFactory){
		
		//$scope.name = "Vote for baby's name today!!"
		homeFactory.getNames().then(function(result) {  // this is only run after $http completes
   			$scope.data = result;
       		console.log("data.name"+$scope.data.name);
		});
		//console.log('obj',object);
		//$scope = object;
		
	}]);

	

})();