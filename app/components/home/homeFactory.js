(function(){

	'use strict';

	angular.module("babyApp.homeFactory",[]).factory("homeFactory",['$http', function($http, $scope, $q){

		return{
			
			getNames : function(){

				$http.get("http://localhost/babyname/api/Names")
				  .then(
				    /* sucesso */
				    function(response) {
				    	console.log(response.data);
				      return response.data;
				    },
				    /* falha */
				    function(error) {
				      console.log("The request failed: " + error);
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