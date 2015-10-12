angular.module('homeController', ['ngRoute', 'homeService'])

.controller('homeCtrl', function('homeService',$scope){
	
	//$scope.name = "Vote for baby's name today!!"
	$scope.name = homeService.homeSvc.getNames();
	console.log($scope);
	console.log($scope);
});