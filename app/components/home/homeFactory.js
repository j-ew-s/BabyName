(function(){

	'use strict';

	angular.module("babyApp.homeFactory",[]).factory("homeFactory",['$http', function($http, $scope, $q){

		return{
			
			getNames : function(){

				var promise = $http({method:'GET', url:'http://localhost/babyname/api/Names'})
			    .success(function (data, status, headers, config) {
			    	console.log('factory',data);
			      return data.data;
			    })
			    .error(function (data, status, headers, config) {
			      return {"status": false};
			    });
			  
			  return promise;

			},

			saveVote : function($nameId){
				$http.post('~/api/NameVote',$nameId);
			}, 

			createNewName : function($newName){
			 $http.post('~/api/NewName',$newName);
			}

			getChartData : function(){

				var promise = $http({method:'GET', url:'http://localhost/babyname/api/NameChart'})
			    .success(function (data, status, headers, config) {
			    	console.log('factory',data);
			      return data.data;
			    })
			    .error(function (data, status, headers, config) {
			      return {"status": false};
			    });
			  
			  return promise;
			}

		}


	}])

})();