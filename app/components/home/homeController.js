(function (){
	'use strict';


	angular.module('babyApp.homeController', ['babyApp.homeFactory'])
	.controller('homeCtrl',['$scope','homeFactory', function($scope, homeFactory){
		
		$scope.init = function(){

			//data to table
			homeFactory.getNames().then(function(promise) {
				console.log('promise',promise.data.data)
	   			 $scope.babys = promise.data.data;

	  		});

		
			//data to chart
			homeFactory.getChartData().then(function(promise) {
				console.log('promise',promise.data.data);
				$scope.chart = promise.data.data;
				var chartValues = [];
				var baby = "";
				for(var i = 0; i < promise.data.data.length; i++ )
				{
				 	
				 	baby = "['" + promise.data.data[i].Name + "' , " + promise.data.data[i].Vote + "]";
				 	console.log('entrou', baby);
				 	chartValues.push(baby);
				 	console.log('!!chartValues',chartValues);
				 	baby = "";
				}

	   			 console.log("values chart,",	chartValues);
	   			 $('#container').highcharts({
			        chart: {
			            type: 'column'
			        },
			        title: {
			            text: 'World\'s largest cities per 2014'
			        },
			        subtitle: {
			            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
			        },
			        xAxis: {
			            type: 'category',
			            labels: {
			                rotation: -45,
			                style: {
			                    fontSize: '13px',
			                    fontFamily: 'Verdana, sans-serif'
			                }
			            }
			        },
			        yAxis: {
			            min: 0,
			            title: {
			                text: 'Population (millions)'
			            }
			        },
			        legend: {
			            enabled: false
			        },
			        tooltip: {
			            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
			        },
			        series: [{
			            name: 'Population',
			            data: [{
			               chartValues
			            }
			            ],
			            dataLabels: {
			                enabled: true,
			                rotation: -90,
			                color: '#FFFFFF',
			                align: 'right',
			                format: '{point.y:.1f}', // one decimal
			                y: 10, // 10 pixels down from the top
			                style: {
			                    fontSize: '13px',
			                    fontFamily: 'Verdana, sans-serif'
			                }
			            }
			        }]
			    });
	  		});
		}
		
		$scope.upload = function(){

			homeFactory.saveVote($scope.id);
		}

		$scope.init();

	}]);

// FUNCTION()
})();