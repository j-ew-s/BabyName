var babyApp = angular.module('babyApp',['ngRoute']);

babyApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'app/views/contact.html',
                controller  : 'contactController'
            });
    });


babyApp.controller('mainCtrl', function($scope){
	
	$scope.name = "Vote for baby's name today!!"
});

babyApp.controller('aboutCtrl', function($scope){
	
	$scope.name = "Web page for my baby's name vote counting!"
});