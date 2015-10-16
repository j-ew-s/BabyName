(function (){

	'use strict';

	angular.module('babyApp.homeController', ['babyApp.homeFactory'])

	.controller('homeCtrl',['$scope','homeFactory', function($scope, homeFactory){
		
		var myDataPromise = homeFactory.getNames();
	    	 // this is only run after $http completes
	   	$scope.data = myDataPromise;
       	console.log("data.name "+ myDataPromise);
		
	}]);


})();