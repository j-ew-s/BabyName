(function(){

	'use strict';

	angular.module("babyApp.homeFactory",[]).factory("homeFactory",['$http', function($http, $scope){

		return{
			
			getNames : function(){
				//console.log('entrou')
				//var retorno  = $http.get('http://localhost/babyname/api/Names');
				var retorno;
				var mainInfo = $http.get('http://localhost/babyname/api/Names')
				.success(function(response) {
					console.log('g',response.data);
        			retorno = response.data;
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