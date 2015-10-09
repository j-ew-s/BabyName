var babyApp = angular.module('babyApp',['ngRoute', 'homeController']);

babyApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'app/components/home/homeView.html',
                controller  : 'homeCtrl'
            })

            // route for the about page
          /*  .when('/about', {
                templateUrl : '../views/about.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '../views/contact.html',
                controller  : 'contactController'
            });*/
    });


babyApp.controller('aboutCtrl', function($scope){
	
	$scope.name = "Web page for my baby's name vote counting!"
});