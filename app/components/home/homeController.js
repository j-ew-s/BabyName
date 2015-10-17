(function (){
	'use strict';


	angular.module('babyApp.homeController', ['babyApp.homeFactory'])
	.controller('homeCtrl',['$scope','homeFactory', function($scope, homeFactory){
		
		//data to table
		homeFactory.getNames().then(function(promise) {
			console.log('promise',promise.data.data)
   			 $scope.babys = promise.data.data;
  		});
	
		//data to chart
		homeFactory.getChartData().then(function(promise) {
			console.log('promise',promise.data.data)
   			 $scope.babys = promise.data.data;

//a
 $scope.chart = chart: {
            type: 'bar'
        },
        title: {
            text: 'Baby name votes'
        },
        xAxis: {
            categories: ['Votes']
        },
        yAxis: {
            title: {
                text: 'votes'
            }
        },
        series: [promise.data.data]
//a

  		});

	}]);

// FUNCTION()
})();