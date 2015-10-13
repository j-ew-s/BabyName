(function (){

	'use strict';

	angular.module('babyApp.homeController', ['babyApp.homeService'])

	.controller('homeCtrl', function('homeService',$scope){
		
		//$scope.name = "Vote for baby's name today!!"
		$scope.name = $scope.homeService.getNames();
		console.log($scope);
	});

	homeController.$inject=["$scope","homeService"];


})();