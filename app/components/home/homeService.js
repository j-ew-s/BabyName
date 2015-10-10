angular.module("homeService",[]).factory("homeService",['$http', function($http){

	return{
		
		getNamesList : function(){
			return $http.get('~/api/NamesList')
		},

		saveVote : function($nameId){
			return $http.post('~/api/NameVote',$nameId)
		}, 

		createNewName : function($newName){
			return $http.post('~/api/NewName',$newName)
		}
	}


}])