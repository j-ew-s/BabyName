(function(){

	'use strict';

	angular.module("babyApp.homeFactory",[]).factory("homeFactory",['$http', function($http, $scope, $q){

		return{
			
			getNames : function(){

				var deferred = $q.defer();

				$http.get('http://localhost/babyname/api/Names')
				
				.then(function(response) {
					
					console.log('g',response.data);
        			
        			deferred.resolve(response.data);
    				
    				return deferred.promise;

    			});
			},

			saveVote : function($nameId){
				$http.post('~/api/NameVote',$nameId);
			}, 

			createNewName : function($newName){
			 $http.post('~/api/NewName',$newName);
			}

		}


	}])

})();