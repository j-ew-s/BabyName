angular.module('route', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'app/components/home/homeView.html',
                controller  : 'homeCtrl'
            });

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
       
        
    }]);
