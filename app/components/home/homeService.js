angular.module("homeService",[]).factory("homeSvc",['$http', function($http){

	return{
		
		getNames : function(){
			return $http.get('~/api/Names')
		},

		saveVote : function($nameId){
			return $http.post('~/api/NameVote',$nameId)
		}, 

		createNewName : function($newName){
			return $http.post('~/api/NewName',$newName)
		}

	}


}])